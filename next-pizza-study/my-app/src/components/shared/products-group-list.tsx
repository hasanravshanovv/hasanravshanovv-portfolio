"use client"

import React from "react"

import { useIntersection } from "react-use"
import { Title } from "./title"
import { cn } from "@/lib/utils"
import { ProductCart } from "./product-cart"
import { useCategoryStore } from "../../../store/category"

interface Props {
  title: string
  items: any[]
  listClassName?: string
  categoryId: number
  className?: string
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const interSectionRef = React.useRef(null)
  const intersection = useIntersection(interSectionRef, {
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])
  return (
    <div className={className} id={title} ref={interSectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCart
            key={product.id}
            id={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
            // price={product.item[0].price}
          />
        ))}
      </div>
    </div>
  )
}
