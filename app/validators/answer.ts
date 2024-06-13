import vine from '@vinejs/vine'

export const storeValidator = vine.compile(
  vine.object({
    params: vine.object({
      question_id: vine.string(),
    }),
    message: vine.string().trim(),
  })
)

export const indexValidator = vine.compile(
  vine.object({
    params: vine.object({
      question_id: vine.string(),
    }),
  })
)
