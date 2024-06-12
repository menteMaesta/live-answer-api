import vine from '@vinejs/vine'

export const storeValidator = vine.compile(
  vine.object({
    title: vine.string().trim(),
  })
)

export const showValidator = vine.compile(
  vine.object({
    params: vine.object({
      question_id: vine.string(),
    }),
  })
)
