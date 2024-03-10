import React, { useState } from 'react';
import './Deposit.css'; // Import the CSS file for styling

const Deposit = () => {
  // State for points and transactions
  const [points, setPoints] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [accountDetails, setAccountDetails] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [beneficiaryAccount, setBeneficiaryAccount] = useState('');
  const [beneficiaryIfscCode, setBeneficiaryIfscCode] = useState('');

  // Function to handle depositing points
  const depositPoints = (amount) => {
    setPoints(points + amount);
    const transaction = {
      type: 'Deposit',
      amount: amount,
      accountDetails: accountDetails,
      ifscCode: ifscCode,
      beneficiaryAccount: beneficiaryAccount,
      beneficiaryIfscCode: beneficiaryIfscCode,
      date: new Date().toLocaleString()
    };
    setTransactions([...transactions, transaction]);
    setAccountDetails('');
    setIfscCode('');
    setBeneficiaryAccount('');
    setBeneficiaryIfscCode('');
  };

  return (
    <div className="deposit-container">
      <div className="deposit-content">
        <h1 className="deposit-title">Deposit of Bank</h1>

        {/* Form for depositing points */}
        <form className="deposit-form" onSubmit={(e) => {
          e.preventDefault();
          const amount = parseInt(e.target.elements.amount.value);
          depositPoints(amount);
          e.target.reset();
        }}>
          <div className="form-group">
            <label htmlFor="accountDetails" className="form-label">Account no:</label>
            <input
              type="text"
              id="accountDetails"
              name="accountDetails"
              value={accountDetails}
              onChange={(e) => setAccountDetails(e.target.value)}
              className="form-input"
              placeholder="Enter Account Details"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ifscCode" className="form-label">IFSC Code:</label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              className="form-input"
              placeholder="Enter IFSC Code"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="beneficiaryAccount" className="form-label">Beneficiary Account no:</label>
            <input
              type="text"
              id="beneficiaryAccount"
              name="beneficiaryAccount"
              value={beneficiaryAccount}
              onChange={(e) => setBeneficiaryAccount(e.target.value)}
              className="form-input"
              placeholder="Enter Beneficiary Account"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="beneficiaryIfscCode" className="form-label">Beneficiary IFSC Code:</label>
            <input
              type="text"
              id="beneficiaryIfscCode"
              name="beneficiaryIfscCode"
              value={beneficiaryIfscCode}
              onChange={(e) => setBeneficiaryIfscCode(e.target.value)}
              className="form-input"
              placeholder="Enter Beneficiary IFSC Code"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="int"
              id="amount"
              name="amount"
              className="form-input"
              placeholder="Enter Amount"
              required
            />
          </div>

          <button type="submit" className="form-button">Deposit</button>
        </form>

        {/* List of transactions */}
        <h2 className="transaction-title">Transaction History</h2>
        <ul className="transaction-list">
          {transactions.map((transaction, index) => (
            <li key={index} className="transaction-item">
              <strong>{transaction.type}</strong>: {transaction.amount} points ({transaction.date})
              <br />
              Account no: {transaction.accountDetails}
              <br />
              IFSC Code: {transaction.ifscCode}
              <br />
              Beneficiary Account no: {transaction.beneficiaryAccount}
              <br />
              Beneficiary IFSC Code: {transaction.beneficiaryIfscCode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Deposit;
