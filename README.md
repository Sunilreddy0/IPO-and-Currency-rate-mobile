# React Native IPO Calander and Currency Rate App

This is a mobile application developed using React Native that enables users to track IPO Calander and Currency Rate information.

## Overview

The React Native IPO Calander and Currency Rate App allows users to:

- View a list of IPO Details with their latest prices.
- Access detailed information about a specific stock including historical price data.
- Visualize historical Currency Rate prices using interactive charts.

### Requirements

- Node.js (v14 or later)
- npm
- Expo CLI

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/Sunilreddy0/IPO-and-Currency-rate-mobile.git
    switch to IPO-and-Currency-rate-mobile branch
    cd IPO-and-Currency-rate-mobile
    ```

2. **Install dependencies**

    Using npm:

    ```bash
    npm install
    ```

3. **API Configuration:**

   - Modify `IPOListAndCurrencyRate.js` to replace `'https://your-api-url.com/UPCOMING_IPOS/market'` and `'https://your-api-url.com?    symbols=USDCAD,GBPUSD,USDJPY&token=${token}'` with your actual API endpoint that provides ipo data and currency Rate.
   - Replace `'YOUR_IEXCLOUD_API_KEY'` with your real IEX Cloud API key in `IPOListAndCurrencyRate.js   `.

4. **Start the application**

    ```bash
    expo start
    ```

    This will start the Expo development server. You can run the app on an Android/iOS simulator or scan the QR code with the Expo Go app on your mobile device to run it there.

## Folder Structure
- `App.js`: Main entry point of the application.

## Dependencies

- React
- React Native
- React Navigation

Modify and expand the application based on your requirements.