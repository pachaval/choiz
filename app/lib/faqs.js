export const fetchFaqs = async () => {
    let cachedFaqs = null;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`, {
            cache: "force-cache",
        });
        cachedFaqs = await res.json();
    } catch (error) {
        console.error("Error fetching faqs:", error.message);
        cachedFaqs = [];
    }

    return cachedFaqs;
};