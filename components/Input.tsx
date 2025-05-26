type InputProps = {
  label?: string
  input?: string
  type?: string
  required?: boolean
  textarea?: boolean
  checkbox?: boolean
  placeholder?: string
}

export default function Input({
  label,
  input,
  type = "text",
  required = true,
  textarea = false,
  checkbox = false,
  placeholder = "",
}: InputProps) {
  return (
    <>
      {checkbox ? (
        <div className="mt-6 flex items-start">
          <input
            type="checkbox"
            name="privatnost"
            aria-label="politika privatnosti"
            className="mr-2 w-5 h-5 bg-gray-700 border-gray-600 rounded"
            required
            placeholder={placeholder}
          />
          <label className="text-gray-700">
            Slažem se s{" "}
            <a href="/politika-privatnosti" className="text-blue-500 underline">
              politikom privatnosti
            </a>
          </label>
        </div>
      ) : (
        <div>
          <label className="block font-medium">{label}</label>
          {textarea ? (
            <textarea
              name={input}
              className="w-full border rounded px-3 py-2"
              rows={4}
              required={required}
              aria-label={input}
            />
          ) : (
            <input
              id={input}
              name={input}
              type={type}
              required={required}
              className="w-full border rounded px-3 py-2"
              aria-label={input}
            />
          )}
        </div>
      )}
    </>
  )
}
