import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const IPOCalendar = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const token = 'pk_d110f665a4694855bc96297024288a3f';

  useEffect(() => {
    // Fetch IPO calendar data (this is a fictional endpoint)
    fetch(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch IPO data');
      }
      return response.json();
    })
      .then((data) => {
        setIpoData(data);
      })
      .catch((error) => {
        console.error('Error fetching IPO data:', error);
      });
  }, []);

  // Fetch Currency Exchange Rates
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched currency rates
        setCurrencyRates(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);

  return (
    <View>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>IPO Calendar</Text>
        {ipoData.map((item, index) => (
          <View key={index}>
            <Text>{item.companyName} - {item.offeringDate}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>Currency Exchange Rates</Text>
        {Object.keys(currencyRates).map((symbol) => (
            <View key={symbol}>
              <Text>{symbol}: {currencyRates[symbol].rate}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    color: '#45a049',
    fontSize: 20,
    marginBottom: 13,
    alignContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default IPOCalendar;