import { Button } from '@/components/ui/button';
import { Content, List, Root as Tabs, Trigger } from '@radix-ui/react-tabs';
import { LogOut } from 'lucide-react';
import { WebsiteContext } from '../../context/context';
import { useSettings } from '../_hooks/use-settings';
import { CardDetails } from './cardDetails';
import { ConfirmPassword } from './confirmPassword';
import { PlanDetails } from './planDetails';
import { Profile } from './profile';

export default function SettingsPage({
  websiteOptions,
}: {
  websiteOptions: WebsiteContext | null;
}) {
  const { logMeOut } = useSettings();

  return (
    <Tabs
      defaultValue='profile'
      className='w-full lg:w-[640px] flex flex-col justify-center items-center p-4'
    >
      <List className='py-2 border-b-2 border-zinc-300 w-full mb-4'>
        <div className='mx-auto max-w-fit text-zinc-300'>
          <Trigger
            className='px-4 data-[state=active]:text-[var(--primary-custom)] data-[state=active]:font-semibold'
            value='profile'
          >
            Profile
          </Trigger>
          <Trigger
            className='px-4 data-[state=active]:text-[var(--primary-custom)] data-[state=active]:font-semibold'
            value='password'
          >
            Change Password
          </Trigger>
          <Trigger
            className='px-4 data-[state=active]:text-[var(--primary-custom)] data-[state=active]:font-semibold'
            value='plans'
          >
            My Plans
          </Trigger>
          <Trigger
            className='px-4 data-[state=active]:text-[var(--primary-custom)] data-[state=active]:font-semibold'
            value='cards'
          >
            My Cards
          </Trigger>
        </div>
      </List>
      <Content value='profile' className='w-full'>
        <Profile
          firstName={
            websiteOptions?.appStatus?.licensee?.name?.split(' ')?.at(0) || ''
          }
          lastName={
            websiteOptions?.appStatus?.licensee?.name?.split(' ')?.at(1) || ''
          }
          email={websiteOptions?.appStatus?.licensee?.email || ''}
          phoneNumber={
            websiteOptions?.appStatus?.licensee?.contact?.number || ''
          }
        />
        <Button
          type='button'
          className='border-2 border-red-500 w-full py-6 mt-6 bg-transparent hover:bg-[var(--primary-custom)] px-4 font-semibold text-lg flex justify-between items-center text-red-500 hover:text-white shadow-md'
          onClick={logMeOut}
        >
          <p>Logout</p>
          <LogOut className='w-5 h-5' />
        </Button>
      </Content>
      <Content value='password'>
        <ConfirmPassword />
      </Content>
      <Content value='plans' className='md:w-[640px]'>
        <PlanDetails />
      </Content>
      <Content value='cards' className='max-w-[530px]'>
        <CardDetails />
      </Content>
    </Tabs>
  );
}
