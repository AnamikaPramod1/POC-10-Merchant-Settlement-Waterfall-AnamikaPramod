"use client"

import { useState } from "react"

import ReserveHoldPanel from "@/components/ReserveHoldPanel"
import SettlementWaterfall from "@/components/SettlementWaterfall"
import SettlementDelayChart from "@/components/SettlementDelayChart"
import PricingScenario from "@/components/PricingScenario"
import Filters from "@/components/Filters"

export default function Home() {
  const [filters, setFilters] = useState({
    merchant: "All",
    processor: "All",
    region: "All",
  })

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6">

      {/* HEADER */}
      <h1 className="text-5xl font-bold mb-3">
        Merchant Settlement Waterfall
      </h1>

      <p className="text-gray-400 mb-4 text-lg">
        Track how gross card sales become net merchant deposits
        across the payment rail ecosystem.
      </p>

      {/* DATASET BADGE */}
      <div className="inline-flex items-center px-4 py-2 rounded-xl border border-gray-800 bg-[#111827] mb-8">
        <span className="text-sm text-gray-300">
          Synthetic Intelligence Dataset • CFPB • Federal Reserve Study
        </span>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

        {/* LEFT SIDE — ANALYTICS */}
        <div className="lg:col-span-7 space-y-6">

          {/* KPI CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">
                Gross Sales
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                $125,000
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">
                Fees
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                -$4,700
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">
                Reserve Hold
              </p>

              <h2 className="text-3xl font-bold text-yellow-400">
                -$5,000
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">
                Net Settlement
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                $114,850
              </h2>
            </div>

          </div>

          {/* WATERFALL */}
          <SettlementWaterfall />

          {/* INTELLIGENCE INSIGHT */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-3">
              Settlement Intelligence Insight
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Interchange and processor fees account for the majority
              of merchant settlement leakage. Reserve holds create delayed
              liquidity exposure, especially for high-risk merchants
              and cross-border transactions.
            </p>

          </div>

          {/* DELAY CHART */}
          <SettlementDelayChart />

          {/* PRICING SCENARIO */}
          <PricingScenario />

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-3 space-y-6">

          {/* WHY THIS MATTERS */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Why This Matters
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>
                Settlement delays directly impact merchant cash flow.
              </li>

              <li>
                Reserve holds reduce liquidity visibility.
              </li>

              <li>
                Pricing opacity increases operational costs.
              </li>

              <li>
                Understanding payment rail economics improves planning.
              </li>

            </ul>

          </div>

          {/* WHO CONTROLS THE RAIL */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Who Controls the Rail
            </h2>

            <div className="space-y-5 text-gray-300">

              <div>
                <p className="font-semibold text-white mb-1">
                  Card Networks
                </p>

                <p>
                  Visa, Mastercard
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">
                  Regulators
                </p>

                <p>
                  Federal Reserve, CFPB
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">
                  Settlement Flow
                </p>

                <p>
                  Networks → Acquirers → Processors → Banks → Merchants
                </p>
              </div>

            </div>

          </div>

          {/* REGULATORY OVERSIGHT */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Regulatory Oversight
            </h2>

            <div className="space-y-4 text-gray-300">

              <div>
                <p className="font-semibold text-white">
                  CFPB
                </p>

                <p>
                  Monitors merchant fairness, fee transparency,
                  and settlement dispute practices.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Federal Reserve
                </p>

                <p>
                  Oversees payment system stability and
                  settlement infrastructure risk.
                </p>
              </div>

            </div>

          </div>

          {/* FILTERS */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Filters
            </h2>

            <Filters
              filters={filters}
              setFilters={setFilters}
            />

          </div>

          {/* RESERVE HOLD PANEL */}
          <ReserveHoldPanel />

        </div>

      </div>

    </div>
  )
}