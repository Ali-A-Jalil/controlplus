import React from "react";

const FinancialReports = () => {
  const profitLossReport = { revenue: 50000, expenses: 40000 };
  const balanceSheet = { assets: 100000, liabilities: 50000, equity: 50000 };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Financial Reports</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Profit and Loss</h3>
        <p>Revenue: ${profitLossReport.revenue}</p>
        <p>Expenses: ${profitLossReport.expenses}</p>
        <p>Profit: ${profitLossReport.revenue - profitLossReport.expenses}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Balance Sheet</h3>
        <p>Assets: ${balanceSheet.assets}</p>
        <p>Liabilities: ${balanceSheet.liabilities}</p>
        <p>Equity: ${balanceSheet.equity}</p>
      </div>
    </div>
  );
};

export default FinancialReports;
