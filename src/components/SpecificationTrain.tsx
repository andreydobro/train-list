export function SpecificationTrain() {
    return (
        <div className="wraper">
            <h1 className="title">Характеристики</h1>
            <p className="subtitle">{}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Ток д вигателя</th>
                        <th>Сила тяги</th> 
                        <th>Скроость</th>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{}</th>
                        <th>{}</th>
                        <th>{}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}