import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type Status = "Inactive" | "DNC" | "Pending" | "Completed"

const statuses: Status[] = ["Inactive", "DNC", "Pending", "Completed"]

export function RecentSales() {
  const randomStatus = () =>
    statuses[Math.floor(Math.random() * statuses.length)]

  return (
    <div className="space-y-8">
      <CustomerRow
        avatar="/avatars/01.png"
        name="Olivia Martin"
        email="olivia.martin@email.com"
        status={randomStatus()}
        avatarFallback="OM"
      />
      <CustomerRow
        avatar="/avatars/02.png"
        name="Jackson Lee"
        email="jackson.lee@email.com"
        status={randomStatus()}
        avatarFallback="JL"
      />
      <CustomerRow
        avatar="/avatars/03.png"
        name="Isabella Nguyen"
        email="isabella.nguyen@email.com"
        status={randomStatus()}
        avatarFallback="IN"
      />
      <CustomerRow
        avatar="/avatars/04.png"
        name="William Kim"
        email="will@email.com"
        status={randomStatus()}
        avatarFallback="WK"
      />
      <CustomerRow
        avatar="/avatars/05.png"
        name="Sofia Davis"
        email="sofia.davis@email.com"
        status={randomStatus()}
        avatarFallback="SD"
      />
    </div>
  )
}

interface CustomerRowProps {
  avatar: string
  name: string
  email: string
  status: Status
  avatarFallback: string
}

function CustomerRow({
  avatar,
  name,
  email,
  status,
  avatarFallback,
}: CustomerRowProps) {
  const statusColor =
    status === "Completed"
      ? "bg-green-500 text-white"
      : status === "Pending"
        ? "bg-yellow-500 text-black"
        : status === "Inactive"
          ? "bg-red-500 text-white"
          : "bg-gray-300 text-gray-700"

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar} alt="Avatar" />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-wrap items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <Badge className={`text-xs ${statusColor}`}>{status}</Badge>
      </div>
    </div>
  )
}
