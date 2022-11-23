import Header from "../components/Header";
import FormLogin from "../components/login/FormLogin";
import { MainLayout } from "../styles/GlobalStyles";

export default function Login() {
  return (
    <>
      <Header />

      <MainLayout>
        <FormLogin />
      </MainLayout>
    </>
  );
}

