<script setup>
import { ref } from 'vue';

// Importamos los componentes necesarios de PrimeVue
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag'; // Para etiquetas bonitas
import InputText from 'primevue/inputtext';

// 1. Datos simulados (como vendrían de tu base de datos)
const productos = ref([
    { id: 1000, codigo: 'RB-Ban-01', nombre: 'RayBan Wayfarer', precio: 150, categoria: 'Sol', stock: 24, estado: 'INSTOCK' },
    { id: 1001, codigo: 'OA-Hol-02', nombre: 'Oakley Holbrook', precio: 120, categoria: 'Deportivo', stock: 0, estado: 'OUTOFSTOCK' },
    { id: 1002, codigo: 'GU-Avi-03', nombre: 'Gucci Aviator', precio: 290, categoria: 'Lujo', stock: 5, estado: 'LOWSTOCK' },
    { id: 1003, codigo: 'AR-Rec-04', nombre: 'Armazón Rectangular', precio: 45, categoria: 'Lectura', stock: 100, estado: 'INSTOCK' },
    { id: 1004, codigo: 'LC-Dia-05', nombre: 'Lentes de Contacto Diarios', precio: 30, categoria: 'Lentes', stock: 12, estado: 'INSTOCK' },
    { id: 1005, codigo: 'LQ-Lim-06', nombre: 'Líquido Limpiador 50ml', precio: 10, categoria: 'Accesorios', stock: 2, estado: 'LOWSTOCK' },
]);

// Función para obtener severidad (color) según el stock
const getSeverity = (producto) => {
    if (producto.estado === 'INSTOCK') return 'success'; // Verde
    if (producto.estado === 'LOWSTOCK') return 'warn';   // Amarillo
    if (producto.estado === 'OUTOFSTOCK') return 'danger'; // Rojo
    return null;
};
</script>

<template>
    
    <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-6 m-2">
            <h1 class="text-3xl font-bold text-gray-800">Inventario Óptica</h1>
            <Button label="Nuevo Producto" icon="pi pi-plus" class="shadow-lg" />
        </div>

        <div class="card bg-white p-4 rounded-xl shadow-md border border-gray-100 m-3">
            <DataTable :value="productos" paginator :rows="5" tableStyle="min-width: 50rem">
                
                <Column field="codigo" header="Código" sortable style="width: 15%" class="font-bold"></Column>
                
                <Column field="nombre" header="Nombre" sortable style="width: 25%">
                    <template #body="slotProps">
                        <span class="text-gray-700">{{ slotProps.data.nombre }}</span>
                    </template>
                </Column>

                <Column field="categoria" header="Categoría" sortable style="width: 15%"></Column>

                <Column field="precio" header="Precio" sortable style="width: 15%">
                    <template #body="slotProps">
                        <span class="text-green-600 font-mono ">
                            ${{ slotProps.data.precio }}
                        </span>
                    </template>
                </Column>

                <Column header="Estado" style="width: 15%">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.estado" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
                
                <Column field="stock" header="Stock" sortable style="width: 15%">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                            <span :class="data.stock === 0 ? 'text-red-500' : 'text-blue-600'" class="font-bold text-lg">
                                {{ data.stock }}
                            </span>
                            <span class="text-xs text-gray-400">unid.</span>
                        </div>
                    </template>
                </Column>

            </DataTable>
        </div>
    </div>


</template>