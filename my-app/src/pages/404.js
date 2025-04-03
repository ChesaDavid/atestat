export default function Error()
{
    return(
        <main className="min-h-screen z-12 bg-red-600 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center  gap-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxPOZFklUuhAr7vI13sf0M_KkIgIJikKcSA&s"
                    className="w-48 h-48 rounded-full border-4 border-white shadow-md mb-6"
                    >
                </img>
                <p className="text-lg bold text-white">ERROR 404</p>
            </div>
            <scan className="text-white">Pagina nu a fost gasita!</scan>
        </main>
    );
}