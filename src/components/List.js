import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964}  />
                <Item marca="Renault" ano_lancamento={1944}/>
                <Item marca="Chevrolet"   />
                <Item  />
                <Item ano_lancamento={1941} />
            </ul>
        </>
    )
}
export default List