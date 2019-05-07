import React from 'react';
import './App.css';
import MuiDatatable from "mui-datatables";
import UserCard from './UserCard';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Switch, FormControlLabel, Typography } from '@material-ui/core';

const cards = [
  {
    name: "Tom Tallis",
    cardNumber: "5500005555555559",
    cvc: "582",
    expiry: "02/24"
  },
  {
    name: "Rich Harris",
    cardNumber: "4444444444444448",
    cvc: "172",
    expiry: "03/22"
  },
  {
    name: "Moby Dixon",
    cardNumber: "3566003566003566",
    cvc: "230",
    expiry: "12/25"
  }
];

function customRowRender({ data }) {
  const [ name, cardNumber, cvc, expiry ] = data;
  return (
    <tr key={cardNumber}>
      <td colSpan={4} style={{ paddingTop: "10px"}}>
        <UserCard {...{name, cardNumber, cvc, expiry}} />
      </td>
    </tr>
  )
}

function App() {
  const isNarrow = useMediaQuery('(max-width:600px)');
  const [ enableStacked, setEnableStacked ] = React.useState(false);

  return (
    <div className="App">
      <MuiDatatable
        key={"" + isNarrow + "" + enableStacked}
        title={(
          <>
            <Typography>
              Cards
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={enableStacked}
                  onChange={v => setEnableStacked(v.target.checked)}
                />
              }
              label="use 'stacked' mode"
            />
          </>
        )}
        data={cards}
        columns={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "cardNumber",
            label: "Card Number"
          },
          {
            name: "cvc",
            label: "CVC"
          },
          {
            name: "expiry",
            label: "Expiry"
          },
        ]}
        options={{
          selectableRows: "none",
          responsive: enableStacked ? "stacked" : "scroll",
          customRowRender: (enableStacked || !isNarrow) ? undefined : customRowRender
        }}
      />
    </div>
  );
}

export default App;
