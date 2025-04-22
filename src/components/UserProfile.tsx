import { User } from "@/types/api";

interface UserProfileProps {
  user: User;
}

export const UserProfileSkeleton = () => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm animate-pulse">
      <div className="flex items-start space-x-4">
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
        <div>
          <div className="h-8 bg-gray-200 rounded w-48 mb-1"></div>
          <div className="h-6 bg-gray-200 rounded w-24"></div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="h-7 bg-gray-200 rounded w-40"></div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-3 bg-gray-200 rounded-full"></div>
            <div className="h-6 bg-gray-200 rounded w-40"></div>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-3 bg-gray-200 rounded-full"></div>
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-7 bg-gray-200 rounded w-24"></div>
          <div className="flex items-start">
            <div className="w-5 h-5 mr-3 bg-gray-200 rounded-full mt-1"></div>
            <div>
              <div className="h-5 bg-gray-200 rounded w-56 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <span className="text-emerald-600 text-xl font-bold">
            {user.name
              ? `${user.name.firstname
                  .charAt(0)
                  .toUpperCase()}${user.name.lastname.charAt(0).toUpperCase()}`
              : user.username.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.name
              ? `${user.name.firstname
                  .split("")
                  .map((char, index) =>
                    index === 0 ? char.toUpperCase() : char
                  )
                  .join("")} ${user.name.lastname
                  .split("")
                  .map((char, index) =>
                    index === 0 ? char.toUpperCase() : char
                  )
                  .join("")}`
              : user.username.charAt(0).toUpperCase()}
          </h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700">
            Contact Information
          </h3>
          <p className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {user.email}
          </p>
          {user.phone && (
            <p className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {user.phone}
            </p>
          )}
        </div>

        {user.address && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Address</h3>
            <p className="flex items-start text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                {user.address.number && user.address.street
                  ? `${user.address.number} ${user.address.street}`
                  : ""}
                {user.address.city && user.address.zipcode && (
                  <>
                    <br />
                    {`${user.address.city}, ${user.address.zipcode}`}
                  </>
                )}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
