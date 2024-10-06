import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BASE, BASE_POST, Origin } from './url';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function Call<T>(
  url: string,
  override: boolean = false
): Promise<T> {
  const response = await fetch((override ? BASE_POST : BASE) + url, {
    method: 'get',
    headers: {
      origin: Origin,
      Authorization: `Bearer ${localStorage.getItem('bearer')}`,
      Accept: 'application/json',
    },
  });
  if (response.ok) {
    const data = (await response.json()) as T;
    console.log(data);
    return data;
  } else {
    if (response.status === 403)
      throw new Error('Provided credentials does not match');
    else if (response.status === 401) throw new Error('Unauthorized');
    else {
      console.log(response);
      console.log(await response.json());
      throw new Error('custom');
    }
  }
}

export async function Put<T>(
  url: string,
  body: any,
  method: 'POST' | 'PUT' | 'PATCH' = 'POST'
): Promise<T> {
  const response = await fetch(BASE_POST + url, {
    method,
    headers: {
      origin: Origin,
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('bearer')}`,
      'Content-Type': 'application/json',
      'Api-Key': '97b42543-44d7-40c0-9905-64c14783f3a2',
    },
    body: JSON.stringify(body) as string,
  });

  if (response.ok) {
    const data = (await response.json()) as T;
    if (url === '/login') {
      localStorage.setItem(
        'bearer',
        response.headers.get('authorization_token') || ''
      );
    }

    console.log(data);
    return data;
  } else {
    if (response.status === 403)
      throw new Error('Provided credentials does not match');
    else if (response.status === 401) throw new Error('Unauthorized');
    else {
      console.log(response);
      console.log(await response.json());
      throw new Error('custom');
    }
  }
}

export const fetchWebsiteDetails = async () => {
  const [servicesResponse, appStatusResponse, websiteDetailsResponse] =
    await Promise.all([
      fetch(BASE + '/get-services', {
        headers: { origin: Origin },
      }),
      fetch(BASE + '/app-status', {
        headers: { origin: Origin },
      }),
      fetch(BASE + '/get-website-details', {
        headers: { origin: Origin },
      }),
    ]);

  const [services, appStatus, websiteDetails] = await Promise.all([
    servicesResponse.json(),
    appStatusResponse.json(),
    websiteDetailsResponse.json(),
  ]);

  return {
    services: services.data,
    appStatus: appStatus.data,
    websiteDetails: websiteDetails.data,
  };
};
