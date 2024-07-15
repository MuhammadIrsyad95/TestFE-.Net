import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';

import Header from './components/Header';
import RegisterPage from './page/RegisterPage';
import EmailPage from './page/EmailPage';
import NewPasswordPage from './page/NewPasswordPage';
import ForgotPasswordPage from './page/ForgotPasswordPage';
import LandingPage from './page/Landing Page';
import LandingPageHome from './page/LandingPageHome';
import ListMenuPage from './page/ListMenuPage';
import DetailClassPage from './page/DetailClassPage';
import SuccessPurchase from './page/SuccessPurchase';
import InvoicePage from './page/InvoicePage';
import CheckoutPage from './page/CheckoutPage';

import ModalCheckout from './page/ModalCheckout';
import DetailInvoice from './page/DetailInvoice';
import MyClassPage from './page/MyClassPage';

//admin
import LandingAdminPage from './page/admin/LandingAdminPage';
import { AuthProvider } from './contexts/AuthContext';
import GuestWrapper from './GuestWrapper';
import AuthWrapper from './AuthWrapper';
import AuthAdmWrapper from './AuthAdmWrapper';
import LoginAdminPage from './page/admin/LoginAdminPage';
import InvoiceAdminPage from './page/admin/InvoiceAdminPage';
import DetInvoiceAdminPage from './page/admin/DetInvoiceAdminPage';


function App() {
  


  return (
    <AuthProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={
          <GuestWrapper>
            <LoginPage />
          </GuestWrapper>
        } /> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/emailpage" element={<EmailPage />} />
        <Route path="/forgotpass" element={<ForgotPasswordPage />} />
        <Route path="/newpass" element={<NewPasswordPage />} />
        <Route path="/" element={
          <GuestWrapper>
            <LandingPageHome />
          </GuestWrapper>

        } />

        <Route path="/landing" element={
          <AuthWrapper>
            <LandingPage />
          </AuthWrapper>
        } />

        <Route path="/listmenu/:menuName" element={<ListMenuPage />} />
        <Route path="/detailclass/:idKategori/:idCourse" element={<DetailClassPage />} />

        <Route path="/successpurchase" element={
          <AuthWrapper>
            <SuccessPurchase />
          </AuthWrapper>
        } />
        <Route path="/checkout" element={
          <AuthWrapper>
            <CheckoutPage />
          </AuthWrapper>
        } />
        <Route path="/invoice" element={
          <AuthWrapper>
            <InvoicePage />
          </AuthWrapper>
        } />
        {/* <Route path="/modal" element={<ModalCheckout />} /> */}
        <Route path="/detailinvoice/:orderId" element={
          <AuthWrapper>
            <DetailInvoice />
          </AuthWrapper>
        } />
        <Route path="/myclass" element={
          <AuthWrapper>
            <MyClassPage />
          </AuthWrapper>
          } />
          
         {/*=======================admin====================*/}
        <Route path="/admin" element={
          <AuthAdmWrapper>            
            <LandingAdminPage />
          </AuthAdmWrapper> 
          } />
        <Route path="/Loginadmin" element={
          <AuthAdmWrapper>  
            <LoginAdminPage />
          </AuthAdmWrapper> 
          } />
        <Route path="/invoiceadmin" element={
          <AuthAdmWrapper>
            <InvoiceAdminPage />
          </AuthAdmWrapper> 
          } />
        <Route path="/detinvoiceadm/:orderId/:namaPemesan" element={
          <AuthAdmWrapper>
            <DetInvoiceAdminPage />
          </AuthAdmWrapper> 
        } />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
