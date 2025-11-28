"use client";

interface Props {
  result: {
    strength: string;
    entropy_bits: number;
    score: number;
    feedback: string[];
  };
}

export default function StrengthBar({ result }: Props) {
  const strengthColors: Record<string, string> = {
    "Very Weak": "bg-red-600 w-1/5",
    Weak: "bg-orange-500 w-2/5",
    Moderate: "bg-yellow-400 w-3/5",
    Strong: "bg-green-500 w-4/5",
    "Very Strong": "bg-green-700 w-full",
  };

  return (
    <div className="space-y-4">
      {/* Strength Label */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{result.strength}</h3>
        <p className="text-sm text-gray-600">Password Strength Score: {result.score}/5</p>
      </div>

      {/* Strength Bar */}
      <div className="w-full h-4 bg-gray-200 rounded-lg">
        <div
          className={`h-full rounded-lg transition-all duration-500 ${strengthColors[result.strength] || ""}`}
        ></div>
      </div>

      {/* Entropy and Feedback */}
      <div className="text-sm text-gray-700">
        <p>Entropy: {result.entropy_bits} bits</p>
        {result.feedback.length > 0 && (
          <ul className="mt-2 list-disc list-inside">
            {result.feedback.map((item, index) => (
              <li key={index} className="text-red-600">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
