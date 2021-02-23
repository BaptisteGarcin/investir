import React, {useState, useEffect, useRef } from 'react'
import './App.css';
import yahooFinance from './yahoo-finance';

const App = () => {
  const isInitialMount = useRef(true);
  const [ticker, setTicker] = useState("");
  const [earningsGain, setEarningsGain] = useState();

  const calculatePctChange = (previous, current) => {
    const change_percent = ((current-previous)/previous)*100;
    return change_percent;
  };

  const getProfits = () => {
    yahooFinance.quote({
      symbol: `${ticker}.PA`,
      modules: [ 'price', 'earnings' ] // see the doc for the full list
    }, function (err, result) {
      if(result){
        console.log(result.earnings.financialsChart.yearly)
        const earningsGrowth = result.earnings.financialsChart.yearly
        .map((v, i) => {
          if(i === 0) return { annee: v.date, chiffre_affaires: v.revenue, benefice_net: v.earnings, pctChange: 0 }
          return { 
            annee: v.date, 
            chiffre_affaires: v.revenue, 
            chiffre_affaires_pctChange: calculatePctChange(result.earnings.financialsChart.yearly[i -1].revenue, v.revenue),
            benefice_net: v.earnings, 
            benefice_net_pctChange: calculatePctChange(result.earnings.financialsChart.yearly[i -1].earnings, v.earnings)
          }
        });
        setEarningsGain(JSON.stringify(earningsGrowth, null, 2)); 
      }
      return err;  
    }).catch(() => {});
  }

  const getQuotesList = (e) => setTicker(e.target.value);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
      getProfits();
   }
  }, [ticker]);

  return (
    <div style={{ margin: '20px'}}>
      <header>
        <input type="text" onChange={getQuotesList} value={ticker}/>
        <pre>{earningsGain}</pre>
      </header>
    </div>
  );
}

export default App;
