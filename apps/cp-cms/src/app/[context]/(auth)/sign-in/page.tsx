import { Button } from '@cp/ui/components'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <>
      <section className="h-full bg-primary-color">
        <div className="h-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-5xl text-white-color font-thin"
          >
            <span className="font-bold">CP&nbsp;</span> Sports
          </a>
          <div className="w-full bg-white-color rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-black-color md:text-xl">
                Faça o login para iniciar a sua seção
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-grey-color"
                  >
                    Nome de usuário
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-white-color border border-opacity-40 border-primary-color text-black-color placeholder:text-gray-color sm:text-sm rounded-lg focus:ring-secondary-color focus:border-secondary-color block w-full p-2.5"
                    placeholder="Insira o seu nome de usuário ou e-mail"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-grey-color"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white-color border border-opacity-40 border-primary-color text-black-color placeholder:text-gray-color sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-2.5"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-color rounded bg-white-color focus:ring-3 focus:ring-secondary-color"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Lembrar-me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Link href="/admin/home">
                  <button
                    type="submit"
                    className="w-full mt-3.5 text-white-color bg-secondary-color hover:bg-secondary-hover-color focus:ring-4 focus:outline-none focus:ring-primary-color font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Entrar
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
