import { useState } from "react"
import { Send, Trash2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ButtonShowcase() {
  const [loading, setLoading] = useState(false)

  const toggleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>الأزرار (Buttons & Actions)</CardTitle>
        <CardDescription>
          أزرار بمتغيرات وأحجام متعددة مع دعم حالات التحميل وتمرير أي فئات مخصصة.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">افتراضي (Default)</Button>
          <Button variant="secondary">ثانوي (Secondary)</Button>
          <Button variant="outline">إطار (Outline)</Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4" />
            حذف (Destructive)
          </Button>
          <Button variant="ghost">شفاف (Ghost)</Button>
          <Button variant="link">رابط (Link)</Button>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <Button size="sm">صغير (SM)</Button>
          <Button size="md">متوسط (MD)</Button>
          <Button size="lg">كبير (LG)</Button>
          <Button size="icon" variant="outline" aria-label="إعجاب">
            <Heart className="h-4 w-4 text-rose-500" />
          </Button>
          <Button isLoading={loading} onClick={toggleLoading}>
            <Send className="h-4 w-4" />
            {loading ? "جاري الإرسال..." : "جرب التحميل"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
