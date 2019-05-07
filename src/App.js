import React from 'react';
import './App.css';
import MuiDatatable from "mui-datatables";
import UserCard from './UserCard';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

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

  return (
    <div className="App">
      <MuiDatatable
        key={"" + isNarrow}
        title="Cards"
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
          responsive: "scroll",
          customRowRender: isNarrow ? customRowRender : undefined
        }}
      />
    </div>
  );
}

export default App;
