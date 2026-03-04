import React, { useState } from "react";

const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-zinc-300 mb-1">
                {label}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    className="mt-1 block w-full bg-zinc-900 border border-zinc-700 rounded p-2 text-zinc-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
            </label>
        </div>
    );
};

const Button = ({ text }) => {
    return (
        <div className="mt-6">
            <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition-colors">
                {text}
            </button>
        </div>
    );
};

// Alterado apenas para 'Login' com L maiúsculo para o React reconhecer como componente
export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pronto para receber o IndexedDB depois
        console.log('Dados enviados:', { email, senha });
        alert(`Login tentado com: ${email}`);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <div className="w-full max-w-sm bg-zinc-800 rounded-lg shadow-xl p-8 border border-zinc-700">
                <h1 className="text-2xl font-bold text-center text-zinc-100 mb-8">Login com React</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        placeholder="exemplo@gmail.com"
                    />
                    <Input
                        label="Senha"
                        type="password"
                        value={senha}
                        onChange={setSenha}
                        placeholder="********"
                    />
                    <Button text="Entrar" />
                </form>
            </div>
        </section>
    );
}