import React from 'react';

const PaymentPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pagos
        </h1>
        <p className="text-gray-600">
          Aquí puedes realizar pagos y ver tu historial de transacciones.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Próximamente: Integración con Stripe para suscripciones y pagos.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;

