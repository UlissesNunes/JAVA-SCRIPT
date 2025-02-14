function EventoOnclick() {

    const Eventog = () => {
        window.alert('ATIVOU EVENTO')
    }
    return (
        <>
            <p className = "esp">Clique para disparar
            <button onClick={Eventog}>Disparar </button> </p>
        </>
    )
}

export default EventoOnclick