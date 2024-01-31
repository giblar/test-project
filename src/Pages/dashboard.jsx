const Dashboard = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl text-center text-sky-600">Selamat Datang!</h1>
    </div>

    <div className="h-screen bg-slate-500 flex justify-center items-center gap-6">
        <div className="card w-10 bg-white p-10 " data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <h1>test</h1>
        </div>
        <div className="card w-10 bg-white p-10">
            <h1>test</h1>
        </div>
        <div className="card w-10 bg-white p-10">
            <h1>test</h1>
        </div>
    </div>
    </>
  );
};

export default Dashboard;
