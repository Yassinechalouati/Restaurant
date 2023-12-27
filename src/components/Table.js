import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Table() {
    return (
      <div className="max-h-[70%]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Food Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-auto max-h-[100%]">
          <table className="min-w-full">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">
                  <div className="w-12 h-12">
                    <img
                      src="chillis.png"
                      alt="fdklf"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">fajitas</p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-green-500">{`$50`}</p>
                </td>
                <td className="py-4 px-6 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEdit size="20" />
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrash size="20" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  