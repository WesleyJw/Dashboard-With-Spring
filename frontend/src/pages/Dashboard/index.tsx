import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import React from 'react';

const Dashboard = () => {
  return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Vendas Dashboard</h1>
                <div className="row px-3">
                <div className="col-sm-6">
                    <h4 className="text-center text-secondary ">Vendedor Sucesso (%)*</h4>
                    <BarChart />
                    <p>*O gráfico de vendedor sucesso representa a proporção de vendas a cada cliente visitado.</p>
                </div>
                <div className="col-sm-6">
                    <h4 className="text-center text-secondary ">Total de Vendas</h4>
                    <DonutChart />
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Total de Vendas</h2>
                </div>

                </div>

                <DataTable/>
            </div>

            <Footer />
    </>
  );
}

export default Dashboard;