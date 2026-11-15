import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function BadgeShowcase() {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>الشارات والتنبيهات (Badges & Tags)</CardTitle>
        <CardDescription>
          شارات أنيقة لعرض الحالات والأنواع بتنسيقات مختلفة وحواف موحدة rounded-md.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">افتراضي</Badge>
          <Badge variant="secondary">ثانوي</Badge>
          <Badge variant="success">مكتمل / نشط</Badge>
          <Badge variant="warning">قيد المراجعة</Badge>
          <Badge variant="destructive">ملغي / مرفوض</Badge>
          <Badge variant="outline">إطار محايد</Badge>
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
            تخصيص مخصص (Override)
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
