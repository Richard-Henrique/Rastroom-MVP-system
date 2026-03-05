import React, { useState } from "react";

export default function Dashboard (){
    return(
        <section id="tab-gestao" class="tab-content hidden">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
                <div class="col-span-2 md:col-span-1 bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-center shadow-lg">
                    <p class="text-[10px] md:text-xs opacity-50 uppercase font-bold">Peças em Produção</p>
                    <p id="total-producao" class="text-3xl md:text-4xl font-black text-orange-500 mt-1">0</p>
                </div>
                <div class="bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-center shadow-lg">
                    <p class="text-[10px] md:text-xs opacity-50 uppercase font-bold">Gargalos / Atrasos</p>
                    <p id="total-gargalos" class="text-3xl md:text-4xl font-black text-red-500 mt-1">0</p>
                </div>
                <div class="bg-zinc-800 p-4 rounded-xl border border-zinc-700 text-center shadow-lg">
                    <p class="text-[10px] md:text-xs opacity-50 uppercase font-bold">Finalizados</p>
                    <p id="total-finalizados" class="text-3xl md:text-4xl font-black text-green-500 mt-1">0</p>
                </div>
            </div>

            <div class="bg-zinc-800 p-4 md:p-6 rounded-xl border border-zinc-700 shadow-xl overflow-hidden">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 class="text-lg md:text-xl font-bold"><i class="fas fa-list-alt mr-2 text-orange-500"></i> Monitoramento</h2>
                    <button class="w-full sm:w-auto text-xs bg-zinc-700 px-4 py-2 rounded font-bold hover:bg-zinc-600 transition">
                        <i class="fas fa-download mr-2"></i>Exportar CSV
                    </button>
                </div>
                <div class="overflow-x-auto rounded-lg border border-zinc-700">
                    <table class="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr class="bg-zinc-900 text-zinc-400 border-b border-zinc-700 text-xs uppercase tracking-widest">
                                <th class="p-3 md:p-4 font-bold">Lote/Móvel</th>
                                <th class="p-3 md:p-4 font-bold">Cliente</th>
                                <th class="p-3 md:p-4 font-bold">Progresso</th>
                                <th class="p-3 md:p-4 font-bold">Tempo Total</th>
                                <th class="p-3 md:p-4 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody id="lista-producao" class="divide-y divide-zinc-700/50"></tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}