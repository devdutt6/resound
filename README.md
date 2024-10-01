/profile/get-details
/payment-methods/get-cards
/music/get-track
/subscription/purcahse-history
/logout
/subscription/get-plan
/add-new-card { payment_method_id: string }

on register after 1st step take to /get-started fetch get-plan
