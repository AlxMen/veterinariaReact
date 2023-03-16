const Paciente = () => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">Leon</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo: {''}
        <span className="font-normal normal-case">correo@correo.es</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">12 febrero de 2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis labore harum illo maiores laborum praesentium molestiae voluptatum consequatur magnam architecto in delectus tempora expedita, id distinctio vel, repellendus, doloremque vitae.</span>
      </p>
    </div>
  )
}

export default Paciente