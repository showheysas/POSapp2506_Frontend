'use client'

import React from 'react'

type Props = {
  code: string
  setCode: React.Dispatch<React.SetStateAction<string>>
}

export default function CameraInput({ code, setCode }: Props) {
  return (
    <div className="w-full">
      <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
        バーコード（JANコード）を入力
      </label>
      <input
        type="text"
        id="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="例：4901777018686"
        className="w-full border rounded px-3 py-2"
      />
    </div>
  )
}
