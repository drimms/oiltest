
import {OilData} from '../models'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/primereact.min.css";
import '../App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

interface ProdProps {
    prod: OilData[]
}

export function Product({prod}: ProdProps) {
    
    return (
        <div className='ticker'>
            <div className='table'>
                <div className="card">
                    <DataTable value={prod} responsiveLayout="scroll">
                        <Column field="date" header="Дата"></Column>
                        <Column field="oil" header="Добыча нефти, т/сут"></Column>
                        <Column field="water" header="Добыча жидкости, м3/сут"></Column>
                    </DataTable>
                </div>
            </div>
        </div>    
    )
}