import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";

function Berita() {
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Berita dan Informasi"}
      menuItems={[
        { title: "Home", href: "/", icon: "bx bx-home" },
        { title: "Akun", href: "/akun", icon: "bx bx-user" },
        {
          title: "Isi Buku Tamu",
          href: "/buku-tamu",
          icon: "bx bx-book",
        },
        { title: "Jadwal Agenda", href: "/agenda", icon: "bx bx-calendar" },
        {
          title: "Berita dan Informasi",
          href: "/berita",
          icon: "bx bxs-news",
          isCurrentPage: true,
        },
        {
          title: (
            <>
              <div className="text-red-600">Logout</div>
            </>
          ),
          href: "/logout",
          icon: "bx bx-exit",
        },
      ]}
    >
      <Breadcrumb items={[{ href: "/berita", name: "Berita" }]} />
      <section className="flex flex-col items-stretch gap-4 mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          dignissimos quo esse modi amet atque!
        </h1>
        <img
          src="https://picsum.photos/id/237/2000/3000"
          alt=""
          className="h-96 object-contain bg-black"
        />
        <article className="w-full py-5 px-6 mb-24 prose prose-lg prose-yellow max-w-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          veritatis voluptates incidunt, earum perspiciatis corrupti error
          dolorem natus obcaecati maiores! Eos eveniet sint reprehenderit labore
          recusandae itaque totam soluta minima quia dolore necessitatibus
          quibusdam quod fugit cumque veniam aliquid laudantium nihil eligendi
          ratione provident reiciendis consectetur, similique harum. Magnam
          suscipit sed tempora voluptas neque veritatis, enim vitae vero
          voluptatum, ullam esse, quibusdam non nobis quod? Saepe, recusandae
          culpa? Beatae facilis molestias quasi, incidunt tempore numquam
          quidem, alias a corrupti cum pariatur. Qui deleniti, ducimus delectus
          possimus, architecto et adipisci similique numquam optio consectetur
          praesentium non blanditiis omnis assumenda tenetur quasi ab minus
          sequi quidem voluptas, quam ea neque iste! Recusandae facilis autem
          asperiores harum dolor ipsum distinctio cupiditate ut officia suscipit
          rerum, aperiam corrupti explicabo sapiente minus vitae voluptatum
          temporibus, alias maxime dolores deleniti obcaecati illo expedita
          veritatis! Magni ea sequi, cupiditate voluptates quidem nulla ullam
          consequatur. Aperiam ea quam accusamus necessitatibus nisi ipsa
          adipisci sequi dolores fuga, minus vero! Ducimus tempora tempore
          beatae. Quo exercitationem nihil recusandae aliquid esse, a enim
          aspernatur saepe? Voluptatem, non? Iste animi a aut sit magnam dolore
          voluptate, labore illum illo nihil eveniet aspernatur? Beatae labore
          esse asperiores reiciendis accusantium, quaerat impedit nesciunt qui
          possimus autem nulla harum sequi error temporibus atque quo eum
          architecto eius quasi facilis laborum? Assumenda nulla laborum fugiat
          quia, quos debitis repellat eveniet tempore ullam ad doloribus veniam
          suscipit? Rem aspernatur quasi, tenetur nihil molestiae odio ratione
          quod mollitia vitae minima vero sit commodi reprehenderit dolor?
          Tempora soluta ex quia maiores totam reiciendis officia excepturi,
          vitae magnam sit ipsam nam maxime pariatur quam temporibus ut cum
          nulla beatae quasi minus illum! Alias, autem quod! Voluptatum
          doloribus voluptatibus quibusdam adipisci placeat nam eos laborum
          earum tenetur libero. Minima sequi est dolorum fugit optio velit sint
          fuga quam ut eligendi ipsa ex eveniet reiciendis recusandae, maiores
          aut nesciunt blanditiis accusamus ea? Id non iure assumenda dolore!
          Officiis, assumenda amet quaerat error, eius accusantium officia
          deserunt quia ut sapiente exercitationem ipsa itaque quo saepe autem
          debitis incidunt at tempora sint dignissimos pariatur ipsum doloribus.
          Porro rem, pariatur impedit temporibus odit magni, nemo minus aperiam,
          ad quasi ducimus. Aliquid accusamus unde veritatis dignissimos
          assumenda, id earum rerum natus ducimus eos exercitationem mollitia
          maxime voluptatem perferendis dolor ea eius quas maiores laborum totam
          doloribus impedit esse minus. Incidunt tempore totam corporis unde!
          Quibusdam natus alias beatae voluptates, error accusantium iste
          necessitatibus incidunt esse! Eum omnis eligendi possimus officiis
          minima similique repudiandae commodi nemo aliquam, eos earum porro
          blanditiis quam velit sunt. Aliquid, at! Adipisci, inventore
          necessitatibus earum illum repudiandae molestias excepturi sapiente
          natus vero expedita quod non, consequatur accusamus labore repellendus
          unde, doloribus officiis! Harum nesciunt deserunt, dicta sequi tempora
          odit laudantium nemo velit itaque. Distinctio ipsam molestias corrupti
          minus nulla reiciendis asperiores cumque magnam! Facilis laboriosam a
          dolore nam odio. Voluptatum dolor vitae asperiores, nobis eum labore
          odio soluta sapiente sint, officia aliquid, consequatur possimus
          praesentium minus iste unde laborum esse sequi culpa vero. Ullam odit
          illum velit deleniti molestias aliquam debitis ex.
        </article>
      </section>
    </PageLayout>
  );
}
export default Berita;
