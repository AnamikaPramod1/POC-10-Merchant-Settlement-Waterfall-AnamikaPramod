export default function ReserveHoldPanel() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Reserve Hold Analytics
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Current Reserve Hold</p>
          <p className="text-yellow-400 text-3xl font-bold">
            $5,000
          </p>
        </div>

        <div>
          <p className="text-gray-400">Reserve Rate</p>
          <p className="text-white text-xl">
            4%
          </p>
        </div>

        <div>
          <p className="text-gray-400">Estimated Release Time</p>
          <p className="text-white text-xl">
            14 Days
          </p>
        </div>

        <div>
          <p className="text-gray-400">Risk Trigger</p>
          <p className="text-red-400 text-xl">
            High Chargeback Volume
          </p>
        </div>
      </div>
    </div>
  )
}