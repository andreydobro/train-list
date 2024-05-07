
import { useEffect, useState } from "react";
// import Api from '../utils/api';


export function TrainList() {

    const [trainList, setTrainList] = useState([]);

    useEffect(() => {
       fetch('https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json')
       .then(res => res.json())
       .then(data => setTrainList(data))
    } , [])

    return (
        <div className="container">
            <div className="wraper">
                <h1 className="title">Поезда</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainList.map(({name, description}) => {
                            return (
                                <tr>
                                    <th>{name}</th>
                                    <th>{description}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}