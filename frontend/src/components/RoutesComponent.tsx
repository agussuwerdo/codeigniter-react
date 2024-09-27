// src/components/RoutesComponent.tsx
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

import PageTitle from './PageTitle';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import Calendar from '../pages/Calendar';
import Chart from '../pages/Chart';
import ECommerce from '../pages/Dashboard/ECommerce';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Tables from '../pages/Tables';
import Alerts from '../pages/UiElements/Alerts';
import Buttons from '../pages/UiElements/Buttons';
import DefaultLayout from '../layout/DefaultLayout';
import Tree from '../pages/Tree';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products/Index';
import ProductDetail from '../pages/Products/Detail';
import Body from './Body'; // Import Body component

const RoutesComponent = ({ loading }: { loading: boolean }) => {
  return (
    <Body isLoading={loading}>
      <Routes>
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <DefaultLayout />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            }
          />
          <Route
            path="/tree"
            element={
              <>
                <PageTitle title="Tree | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tree />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <PageTitle title="Products | TailAdmin" />
                <Products />
              </>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <>
                <PageTitle title="Edit Product | TailAdmin" />
                <ProductDetail />
              </>
            }
          />
          <Route
            path="/products/add"
            element={
              <>
                <PageTitle title="Add Product | TailAdmin" />
                <ProductDetail />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Body>
  );
};

export default RoutesComponent;
