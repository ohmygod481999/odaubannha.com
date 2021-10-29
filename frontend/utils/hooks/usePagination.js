export const usePagination = (start, limit, totalCount) => {
    return {
        currentPage: Math.floor(start / limit),
        totalItems: totalCount,
        itemPerPage: limit,
    };
};
