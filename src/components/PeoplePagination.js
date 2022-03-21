export default function PeoplePagination({ page, total, onChange }) {
   const pages = Math.ceil(total / 10)
   return (
      <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
         {Array.from({ length: pages }, (_, i) => i + 1).map((pageIndex) => {
            const isActive = pageIndex === page

            return isActive ? (
               <b key={pageIndex}> {pageIndex} </b>
            ) : (
               <span key={pageIndex} onClick={() => onChange(pageIndex)}>
                  {"   "}
                  {pageIndex}
                  {"   "}
               </span>
            )
         })}
      </div>
   )
}
