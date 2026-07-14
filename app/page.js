import { supabase } from '../lib/supabase';

// Fitur Next.js App Router memungkinkan kita mengambil data langsung di sisi server
export default async function Home() {
  // Mengambil data dari tabel menu_jajanan di Supabase
  const { data: menu, error } = await supabase
    .from('menu_jajanan')
    .select('*')
    .order('nama', { ascending: true });

  if (error) {
    return <div className="p-6 text-red-500 text-center">Gagal memuat daftar menu.</div>;
  }

  return (
    <main className="min-h-screen bg-orange-50 p-6 font-sans">
      <div className="max-w-md mx-auto">
        
        {/* Header Aplikasi */}
        <header className="text-center mb-10 mt-4">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-2">Diwa Jajanan</h1>
          <p className="text-gray-600">Pilihan cemilan dan jajanan terbaik untukmu</p>
        </header>

        {/* Daftar Menu */}
        <div className="space-y-4">
          {menu?.length === 0 ? (
            <p className="text-center text-gray-500 italic">Belum ada menu yang ditambahkan.</p>
          ) : (
            menu?.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-2xl shadow-sm border border-orange-100 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold text-lg text-gray-800">{item.nama}</h2>
                  <p className="text-sm text-gray-500 mt-1">{item.deskripsi}</p>
                </div>
                <div className="bg-orange-100 px-3 py-1 rounded-lg">
                  <span className="font-bold text-orange-600">Rp {item.harga}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}
