export const ru = {
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    languages: {
        en: "Английский",
        ru: "Русский",
        dk: "Датский",
    },
    notifications: {
      add_riven: {
        success: {
          title: "Мод Разлома добавлен",
          message: "Мод Разлома {{name}} был добавлен на склад.",
        },
        error: {
          title: "Ошибка добавления Мода Разлома",
          message: "Произошла ошибка в {{component}} в {{backtrace}}, для получения дополнительной информации смотрите логи.",
        },
      },
      created_stock: {
        warning: {
          not_found: {
            title: "Предмет не найден",
            message: "Предмет {{item}} не был найден.",
          },
        },
      },
      on_trade_event: {
        title: "Торговля с {{player_name}} завершена",
        message:
          "<blue>{{item_name}}</blue> X<blue>{{quantity}}</blue> {{trade_type}} за {{platinum}}p WFM: <blue>{{wfm_operation}}</blue> Склад: <blue>{{stock_operation}}</blue>",
      },
    },
    enums: {
      transaction_type: {
        purchase: "Покупка",
        sale: "Продажа",
        details: {
          purchase: "Покупка",
          sale: "Продажа",
        },
      },
      item_type: {
        riven: "Мод Разлома",
        item: "Предмет",
        details: {
          riven: "Мод Разлома",
          item: "Предмет",
        },
      },
      user_status: {
        online: "В сети",
        ingame: "В игре",
        invisible: "Не в сети",
      },
      order_type: {
        buy: "Ордер на покупку",
        sell: "Ордер на продажу",
        details: {
          buy: "Покупка",
          sell: "Продажа",
        },
      },
      stock_mode: {
        all: "Все",
        riven: "Моды Разлома",
        item: "Предметы",
      },
      trade_mode: {
        buy: "Покупка",
        sell: "Продажа",
        all: "Все",
        wishlist: "Список желаемого",
      },
      stock_status: {
        pending: "В ожидании",
        live: "Активен",
        to_low_profit: "Слишком низкая прибыль",
        no_sellers: "Нет продавцов",
        no_buyers: "Нет покупателей",
        inactive: "Неактивен",
        sma_limit: "Лимит SMA",
        order_limit: "Лимит ордеров",
        overpriced: "Цена завышена",
        underpriced: "Цена занижена",
        details: {
          pending: "Ожидает обработки",
          live: "Активен на Warframe Market",
          to_low_profit: "Не был обработан из-за низкой прибыли на основе настроек",
          no_sellers: "Для этого предмета не найдено продавцов",
          no_buyers: "Для этого предмета не найдено покупателей",
          inactive: "Неактивен и не будет обработан",
          sma_limit: "Ограничен SMA",
          order_limit: "Ограничен лимитом ордеров",
          overpriced: "Цена завышена",
          underpriced: "Цена занижена",
        },
      },
    },
    components: {
      language_switcher: {
        title: "Выберите язык",
      },
      modals: {
        base: {
          buttons: {
            confirm: "Подтвердить",
            cancel: "Отмена",
          },
        },
        tos: {
          title: "Условия и положения",
          content:
            "# Политика защиты данных Quantframe\n" +
            "Используя Quantframe, вы соглашаетесь на сбор и использование информации в соответствии с этой политикой.\n" +
            "## Сбор и использование информации\n" +
            "Мы собираем несколько различных типов информации для различных целей, чтобы предоставлять и улучшать наш Сервис для вас.\n" +
            "## Типы собираемых данных\n" +
            "### Персональные данные\n" +
            'Во время использования нашего Сервиса мы можем попросить вас предоставить нам определенную личную информацию, которая может быть использована для связи или идентификации вас ("Персональные данные"). Личная информация может включать, но не ограничиваться:\n' +
            "- Имя пользователя Warframe Market\n" +
            "- ID пользователя Warframe Market\n" +
            "- ID устройства (собирается полностью анонимно и используется для отслеживания/обеспечения безопасности)\n" +
            "- Версия Quantframe\n" +
            "- Метрики\n" +
            "- Детали транзакций, относящиеся к активности пользователя (например, добавление/удаление/обновление транзакции)\n" +
            "- Детали предметов/модов разлома на складе, относящиеся к активности пользователя (например, добавление/удаление/обновление предмета/мода разлома на складе)\n" +
            "### Данные о транзакциях и складе\n" +
            "Мы можем собирать информацию о транзакциях и предметах/модах разлома на складе, которые вы добавляете, удаляете или обновляете. Это включает отслеживание конкретных деталей транзакций и предметов/модов разлома, с которыми вы взаимодействуете при использовании нашего Сервиса.\n" +
            "Вы можете отключить сбор этих данных, отключив тег Аналитики в настройках.\n" +
            "### Метрические данные\n" +
            "Мы также можем собирать информацию о том, как осуществляется доступ к Сервису и как он используется. Это включает отслеживание взаимодействий пользователя, таких как конкретные ссылки или кнопки, на которые вы нажимаете при использовании нашего Сервиса.\n" +
            "пример:\n" +
            "```\n" +
            "{\n" +
            '  "active_page": "warframe_market",\n' +
            "}\n" +
            "```\n" +
            "Это нельзя отключить.",
          buttons: {
            accept: "Принять",
            decline: "Отклонить",
          },
        },
      },
      forms: {
        settings: {
          tabs: {
            general: {
              title: "Общие",
            },
            live_trading: {
              title: "Торговля в реальном времени",
              fields: {
                volume_threshold: {
                  label: "Порог объема",
                  placeholder: "Порог объема",
                  error: "Неверный порог объема",
                  tooltip: "Минимальный объем за одну сделку.",
                },
                range_threshold: {
                  label: "Порог диапазона",
                  placeholder: "Порог диапазона",
                  error: "Неверный порог диапазона",
                  tooltip: "Минимальный диапазон между самой высокой и самой низкой ценой.",
                },
                avg_price_cap: {
                  label: "Средняя цена",
                  placeholder: "Средняя цена",
                  error: "Неверная средняя цена",
                  tooltip: "Максимальный предел цены за ордер на покупку.",
                },
                trading_tax_cap: {
                  label: "Предел торгового налога",
                  placeholder: "Предел торгового налога",
                  error: "Неверный предел торгового налога",
                  tooltip: "Максимальный налог в кредитах за ордер на покупку, используйте -1 для неограниченного.",
                },
                max_total_price_cap: {
                  label: "Максимальный общий предел цены",
                  placeholder: "Максимальный общий предел цены",
                  error: "Неверный максимальный общий предел цены",
                  tooltip: "Этот параметр указывает максимальный общий предел цены в платине для всех ордеров на покупку.",
                },
                buy_quantity: {
                  label: "Количество товаров",
                  placeholder: "1",
                  error: "Неверное количество товаров",
                  tooltip: "Количество товаров для покупки за ордер. (Будет применяться ко всем ордерам)",
                },
                price_shift_threshold: {
                  label: "Порог изменения цены",
                  placeholder: "Порог изменения цены",
                  error: "Неверный порог изменения цены",
                  tooltip: "Минимальный порог изменения цены за последние 7 дней.",
                },
                min_sma: {
                  label: "Мин. SMA",
                  placeholder: "Мин. SMA",
                  error: "Неверное мин. SMA",
                  tooltip: "Насколько низко цена может опуститься ниже SMA. -1 для отключения.",
                },
                item_min_profit: {
                  label: "Мин. прибыль",
                  placeholder: "Мин. прибыль",
                  error: "Неверная мин. прибыль",
                  tooltip: "Минимальная прибыль, -1 для отключения.",
                },
                auto_delete: {
                  label: "Автоудаление",
                  error: "Неверное автоудаление",
                  tooltip: "Автоматически удалять предметы со склада",
                },
                stock_mode: {
                  label: "Режим склада",
                  description: {
                    all: "Будет проходить по всем",
                    riven: "Будет проходить только по модам разлома",
                    item: "Будет проходить только по предметам",
                  },
                  placeholder: "Режим склада",
                  error: "Неверный режим склада",
                },
                trade_mode: {
                  label: "Режим торговли",
                  description: {
                    all: "Будет покупать и продавать из списка желаемого",
                    buy: "Будет только покупать",
                    sell: "Будет только продавать",
                    wishlist: "Будет покупать только из вашего списка желаемого",
                  },
                  placeholder: "Режим торговли",
                  error: "Неверный режим торговли",
                },
                report_to_wfm: {
                  label: "Сообщать в Warframe Market",
                  error: "Неверно указано сообщение в Warframe Market",
                  tooltip: "Будет добавлять транзакцию в Warframe Market",
                },
                auto_trade: {
                  label: "Автоторговля (в разработке)",
                  error: "Неверная автоторговля",
                  tooltip: "Автоматически добавлять/продавать со склада, если true",
                },
                should_delete_other_types: {
                  label: "Удалять другие типы сделок",
                  error: "Неверно указано удаление других типов сделок",
                  tooltip:
                    "Будет удалять другие типы сделок, если true, например: если включена покупка, будут удаляться предметы на продажу/в списке желаемого, если они не в черном списке",
                },
                blacklist: {
                  description: "Черный список - это список предметов, которые бот не будет игнорировать. (Продажа/Покупка)",
                  left_title: "Доступные предметы",
                  right_title: "Предметы в черном списке",
                },
                riven_min_profit: {
                  label: "Мин. прибыль",
                  placeholder: "Мин. прибыль",
                  error: "Неверная мин. прибыль",
                  tooltip: "Минимальная прибыль",
                },
                limit_to: {
                  label: "Ограничить до",
                  placeholder: "5",
                  error: "Неверное ограничение",
                  tooltip: "Будет использовать первые {{count}} модов разлома для расчета средней цены",
                },
                threshold_percentage: {
                  label: "Минимальное изменение цены",
                  placeholder: "0",
                  error: "Неверный процент порога",
                  tooltip: "Игнорировать моды разлома, у которых изменение цены меньше {{value}}% от самого дорогого мода разлома",
                },
              },
              tabs: {
                item: "Настройки предметов",
                riven: "Настройки модов разлома",
                general: "Общие настройки",
                wtb: "Настройки покупки",
                wts: "Настройки продажи",
              },
              buttons: {
                save: {
                  label: "Сохранить",
                },
                blacklist: {
                  label: "Черный список {{count}}",
                },
                go_back: {
                  label: "Назад",
                },
              },
            },
            notification: {
              title: "Уведомление",
            },
            log: {
              title: "Лог",
              buttons: {
                open: {
                  label: "Открыть папку с логами",
                },
                export: {
                  label: "Экспорт логов",
                },
              },
            },
            analytics: {
              title: "Аналитика",
              fields: {
                transaction: {
                  label: "Транзакция",
                  tooltip: "Если включено, будет отправлять события транзакций в QF Api",
                },
                stock_item: {
                  label: "Предмет на складе",
                  tooltip: "Если включено, будет отправлять предмет со склада в QF Api",
                },
                stock_riven: {
                  label: "Мод разлома на складе",
                  tooltip: "Если включено, будет отправлять мод разлома со склада в QF Api",
                },
              },
              buttons: {
                save: {
                  label: "Сохранить",
                },
              },
            },
          },
        },
        update_stock_riven: {
          fields: {
            minimum_price: {
              label: "Минимальная цена",
              placeholder: "Минимальная цена",
              description: "Установите 0 для автоцены",
              error: "Неверная минимальная цена",
            },
            use_hidden: {
              label: "Использовать скрытые",
            },
            is_hidden: {
              label: "Скрыт",
            },
          },
          buttons: {
            submit: "Обновить",
          },
        },
        update_stock_item: {
          fields: {
            minimum_price: {
              label: "Минимальная цена",
              placeholder: "Минимальная цена",
              description: "Установите 0 для автоцены",
              error: "Неверная минимальная цена",
            },
            use_hidden: {
              label: "Использовать скрытые",
            },
            is_hidden: {
              label: "Скрыт",
            },
          },
          buttons: {
            submit: "Обновить",
          },
        },
        create_stock_item: {
          fields: {
            quantity: {
              label: "Количество",
              placeholder: "Количество",
              error: "Неверное количество",
            },
            bought: {
              label: "Куплено за",
              placeholder: "Куплено за",
              error: "Неверная цена покупки",
            },
          },
          buttons: {
            add: {
              tooltip: {
                description_with_report: "Добавить предмет на склад и сообщить в Warframe Market",
                description_without_report: "Добавить предмет на склад",
              },
            },
          },
        },
        update_transaction: {
          fields: {
            price: {
              label: "Цена",
              placeholder: "Цена",
              description: "Цена транзакции",
              error: "Неверная цена",
            },
            quantity: {
              label: "Количество",
              placeholder: "Количество",
              description: "Количество в транзакции",
              error: "Неверное количество",
            },
          },
          buttons: {
            submit: "Обновить",
          },
        },
        riven_filter: {
          fields: {
            enabled: {
              label: "Включен",
            },
            similarity: {
              label: "Сходство",
            },
            rank: {
              label: "Ранг",
            },
            mastery_rank: {
              label: "Ранг мастерства",
            },
            required_negative: {
              label: "Требуется негативный",
            },
            re_rolls: {
              label: "Перероллы",
            },
          },
          buttons: {
            save: {
              label: "Сохранить",
            },
          },
        },
        notification: {
          fields: {
            title: {
              label: "Заголовок",
              placeholder: "Заголовок",
              error: "Неверный заголовок",
            },
            content: {
              label: "Содержимое",
              placeholder: "Содержимое",
              error: "Неверное содержимое",
            },
            webhook: {
              label: "Вебхук",
              placeholder: "Вебхук",
              description: "URL вебхука Discord",
              error: "Неверный вебхук",
            },
            user_ids: {
              label: "ID пользователей",
              placeholder: "ID пользователей",
              description: "ID пользователей Discord (числа), разделенные запятой",
              error: "Неверные ID пользователей",
            },
          },
          buttons: {
            system: {
              tooltip: "Системное уведомление",
            },
            save: {
              label: "Сохранить",
            },
            discord: {
              tooltip: "Уведомление в Discord",
            },
          },
        },
        log_in: {
          title: "Warframe Market - Вход",
          register: "Нет аккаунта? Зарегистрироваться",
          fields: {
            email: {
              label: "Email",
              placeholder: "Email",
              error: "Неверный email",
            },
            password: {
              label: "Пароль",
              placeholder: "Пароль",
              error: "Пароль должен содержать не менее 6 символов",
            },
          },
          buttons: {
            submit: "Войти",
          },
        },
        create_riven_attributes: {
          fields: {
            positive: {
              title: "Положительные атрибуты",
              add: "Добавить",
            },
            negative: {
              title: "Отрицательные атрибуты",
            },
          },
        },
        create_riven: {
          buttons: {
            submit: {
              label: "Создать",
            },
          },
          fields: {
            mastery_rank: {
              label: "Ранг мастерства",
              placeholder: "8",
              error: "Неверный ранг мастерства",
            },
            re_rolls: {
              label: "Перероллы",
              placeholder: "0",
              error: "Неверное количество перероллов",
            },
            rank: {
              label: "Ранг",
              placeholder: "0",
              error: "Неверный ранг",
            },
            polarity: {
              label: "Полярность",
              error: "Неверная полярность",
            },
            weapon: {
              label: "Название оружия",
              placeholder: "Оружие",
              error: "Неверное оружие",
            },
            bought: {
              label: "Куплено за",
              placeholder: "Куплено за",
              error: "Неверная цена покупки",
            },
            attributes: {
              label: "Атрибуты",
              error: "Мод разлома должен иметь как минимум 2 положительных атрибута",
            },
            mod_name: {
              label: "Название мода",
              placeholder: "Название мода",
              error: "Неверное название мода",
            },
          },
        },
      },
      chat_rome: {
        fields: {
          message: {
            placeholder: "Введите сообщение...",
            too_long: "Сообщение слишком длинное",
          },
        },
        buttons: {
          send: {
            label: "Отправить",
          },
          back: {
            label: "Назад",
          },
          options: {
            label: "Еще",
          },
        },
      },
      chat_item: {
        un_read_messages: "<mail /> {{count}}",
        delete: "Покинуть чат",
      },
      timer_stamp: {
        months: "{{months}} месяцев назад",
        days: "{{days}} дней назад",
        hours: "{{hours}} часов назад",
        minutes: "{{minutes}} минут назад",
        seconds: "{{seconds}} секунд назад",
      },
      auction_list_item: {
        weapon_name: "<blue>{{weapon}} {{mod_name}}</blue>",
        selling_price: "Цена продажи: <blue>{{price}}</blue> <plat/>",
        starting_price: "Начальная цена: <blue>{{price}}</blue> <plat/>",
        buyout_price: "Цена выкупа: <blue>{{price}}</blue> <plat/>",
        top_bid: "Наивысшая ставка: <blue>{{bid}}</blue> <plat/>",
        no_bids: "Нет ставок",
        footer: "РМ: <blue>{{mastery_level}}</blue> Ранги: <blue>{{mod_rank}}</blue> Перероллы: <blue>{{re_rolls}}</blue> Полярность: <polarity/>",
      },
      stock_item_info: {
        tabs: {
          general: {
            title: "Общее",
          },
          orders: {
            title: "Ордера",
          },
        },
        fields: {
          created_at: "Создано",
          updated_at: "Обновлено",
          minimum_price: "Минимальная цена",
          moving_avg: "Скользящее среднее",
          list_price: "Цена в листинге",
          profit: "Прибыль",
          total_sellers: "Всего продавцов",
          highest_price: "Самая высокая цена",
          lowest_price: "Самая низкая цена",
          status: "Статус",
          bought: "Куплено за",
          owned: "В наличии",
          listed: "История цен в листинге",
          no_orders: "Для этого предмета не найдено ордеров.",
          no_listed: "Нет предыдущих цен в листинге",
        },
        buttons: {
          wfm: "Warframe Market",
          wiki: "Вики",
        },
      },
      wish_item_info: {
        tabs: {
          general: {
            title: "Общее",
          },
          orders: {
            title: "Ордера",
          },
        },
        fields: {
          created_at: "Создано",
          updated_at: "Обновлено",
          maximum_price: "Максимальная цена",
          list_price: "Цена в листинге",
          total_sellers: "Всего продавцов",
          highest_price: "Самая высокая цена",
          lowest_price: "Самая низкая цена",
          status: "Статус",
          quantity: "Количество товаров",
          listed: "История цен в листинге",
          no_orders: "Для этого предмета не найдено ордеров.",
          no_listed: "Нет предыдущих цен в листинге",
        },
        buttons: {
          wfm: "Warframe Market",
          wiki: "Вики",
        },
      },
      order_details: {
        tabs: {
          general: {
            title: "Общее",
          },
          orders: {
            title: "Ордера",
          },
        },
        fields: {
          created_at: "Создано",
          updated_at: "Обновлено",
          list_price: "Цена в листинге",
          profit: "Прибыль",
          total_buyers: "Всего покупателей",
          highest_price: "Самая высокая цена",
          lowest_price: "Самая низкая цена",
          listed: "История цен в листинге",
          no_listed: "Нет предыдущих цен в листинге",
          no_orders: "Для этого предмета не найдено ордеров.",
        },
        buttons: {
          wfm: "Warframe Market",
          wiki: "Вики",
        },
      },
      order_item: {
        fields: {
          quantity: "<qty/> <blue>{{quantity}}</blue>",
          platinum: "<blue>{{platinum}}</blue> <plat/>",
          mod_rank: "Ранг: <blue>{{mod_rank}}</blue>/<blue>{{mod_max_rank}}</blue>",
          subtype: "<blue>{{sub_type}}</blue>",
        },
        notifications: {
          copied: {
            title: "Скопировано",
            message: "{{message}} скопировано в буфер обмена.",
          },
        },
      },
      stock_riven_info: {
        tabs: {
          general: {
            title: "Общее",
          },
          auctions: {
            title: "Аукционы",
          },
        },
        buttons: {
          find_type: "Искать по типу оружия",
          find_similar: "Найти похожие",
        },
        fields: {
          created_at: "Создано",
          updated_at: "Обновлено",
          status: "Статус",
          bought: "Куплено за",
          minimum_price: "Минимальная цена",
          re_rolls: "Перероллы",
          list_price: "Цена в листинге",
          profit: "Прибыль",
          total_sellers: "Всего продавцов",
          highest_price: "Самая высокая цена",
          lowest_price: "Самая низкая цена",
          listed: "История цен в листинге",
          no_auctions: "Для этого мода разлома не найдено аукционов.",
          no_listed: "Нет предыдущих цен в листинге",
          mastery_rank: "Ранг мастерства",
          rank: "Ранг",
        },
      },
      riven_attribute: {
        effect: "{{value}} {{name}}",
      },
      tradableItem_list: {
        pagination: "{{start}} - {{end}} / {{totalRecords}}",
        fields: {
          trade_tax: {
            label: "Диапазон налога на обмен {{min}} - {{max}}",
            placeholder: "Налог на обмен",
          },
          mr_requirement: {
            label: "Требуемый РМ диапазон {{min}} - {{max}}",
            placeholder: "Требуемый РМ",
          },
          tags: {
            label: "Теги",
            placeholder: "Выберите теги...",
            options: {
              prime: "Прайм части",
              set: "Комплект",
              arcane_enhancement: "Мистификатор",
              tax_1m: "Налог 1М",
              tax_2m: "Налог 2М",
            },
          },
        },
        datatable: {
          columns: {
            name: "Название",
            trade_tax: "Налог на обмен",
            mr_requirement: "Требуемый РМ",
          },
        },
        buttons: {
          add_all: {
            tooltip: "Добавить все предметы",
          },
        },
      },
      searchfield: {
        label: "Поиск",
        placeholder: "Поиск...",
        buttons: {
          filter: {
            tooltip: "Фильтр",
          },
          search: {
            tooltip: "Поиск",
          },
          create: {
            tooltip: "Создать",
          },
        },
      },
      select_tradable_item: {
        fields: {
          item: {
            label: "Предмет",
            placeholder: "Выберите предмет...",
          },
          variant: {
            label: "Вариант",
            placeholder: "Выберите вариант...",
          },
          rank: {
            label: "Ранг",
            placeholder: "Выберите ранг...",
          },
          cyan_stars: {
            label: "Голубые звезды",
            placeholder: "Выберите голубые звезды...",
          },
          amber_stars: {
            label: "Янтарные звезды",
            placeholder: "Выберите янтарные звезды...",
          },
        },
      },
      user_menu: {
        items: {
          app_label: "Приложение",
          settings: "Настройки",
          logout: "Выйти",
        },
        errors: {
          logout: {
            title: "Ошибка выхода",
            message: "Произошла ошибка при попытке выхода.",
          },
          update_settings: {
            title: "Ошибка обновления настроек",
            message: "Произошла ошибка при попытке обновления настроек.",
          },
        },
        success: {
          logout: {
            title: "Успешный выход",
            message: "Вы успешно вышли из системы.",
          },
          update_settings: {
            title: "Успешное обновление настроек",
            message: "Настройки были успешно обновлены.",
          },
        },
      },
      clock: {
        gmt: "GMT: <blue>{{time}}</blue>",
        time_until_midnight: "Время до полуночи по GMT: <blue>{{time}}</blue>",
      },
      layout: {
        log_in: {
          navbar: {
            home: "Главная",
            live_trading: "Торговля",
            chats: "Чаты",
            statistics: "Статистика",
            warframe_market: "Warframe Market",
            debug: "Отладка",
            about: "О программе",
            test: "Тест",
          },
        },
      },
      live_trading_control: {
        buttons: {
          start: "Начать торговлю",
          stop: "Остановить торговлю",
        },
        prompts: {
          start: {
            title: "Предупреждение",
            message: "Вы уверены, что хотите начать торговлю? Это действие удалит все ордера на wfm, которые не находятся в черном списке.",
            confirm: "Начать",
            cancel: "Отмена",
          },
        },
        item: {
          stating: "Начинается торговля предметами",
          deleting_orders: "Удаление ордеров {{current}}/{{total}}",
          is_hidden: "Предмет <red>{{name}}</red> скрыт",
          low_profit_delete: "Удаление предмета <red>{{name}}</red> из-за низкой прибыли",
          order_limit_reached: "Достигнут лимит ордеров для <red>{{name}}</red>",
          knapsack_delete: "Удалить предмет <red>{{name}}</red>",
          underpriced_delete: "Удалить предмет с заниженной ценой <red>{{name}}</red>",
          created: "Создан ордер на покупку для <blue>{{name}}</blue> по цене <blue>{{price}}</blue> платины, потенциальная прибыль <blue>{{profit}}</blue>",
          checking_item: "Проверка предмета <blue>{{name}}</blue> <blue>{{current}}</blue>/<blue>{{total}}</blue>",
          no_data: "<dark_red>Нет данных для предмета {{name}} {{current}}/{{total}}</dark_red>",
        },
        riven: {
          stating: "Начинается торговля модами разлома",
          riven_hidden: "Мод разлома <red>{{weapon_name}}</red> <red>{{mod_name}}</red> скрыт",
          searching_riven: "Поиск мода разлома <blue>{{weapon_name}} {{mod_name}}</blue> <blue>{{current}}</blue>/<blue>{{total}}</blue>",
          riven_created:
            "Создан мод разлома <blue>{{weapon_name}} {{mod_name}}</blue> по цене <blue>{{price}}</blue> платины, потенциальная прибыль <blue>{{profit}}</blue>",
        },
      },
      riven_filter_attribute: {
        fields: {
          is_required: {
            tooltip: "Обязательно",
          },
        },
      },
    },
    context: {
      app: {
        new_update: {
          title: "Доступно новое обновление {{version}}",
          message: "Доступно новое обновление. Нажмите кнопку ниже, чтобы установить обновление.",
          buttons: {
            install: "Установить",
            read_more: "Читать далее",
          },
        },
        loading_events: {
          cache: "Загрузка кеша...",
          validation: "Проверка кеша...",
          stock_items: "Загрузка предметов на складе...",
          stock_rivens: "Загрузка модов разлома на складе...",
          transactions: "Загрузка транзакций...",
          user_orders: "Загрузка ордеров Warframe Market...",
          user_auctions: "Загрузка аукционов Warframe Market...",
          user_chats: "Загрузка чатов Warframe Market...",
          check_updates: "Проверка обновлений...",
          log_parser: "Запуск парсера логов...",
          wish_list: "Загрузка списка желаемого...",
        },
      },
      live_scraper: {
        errors: {
          run: {
            title: "Ошибка Live Scraper",
            message: "Произошла ошибка в компоненте {{component}} в {{backtrace}}, для получения дополнительной информации смотрите логи.",
          },
        },
      },
    },
    pages: {
      home: {
        tooltips: {
          bar_chart: {
            footer: {
              expense: "Общие расходы",
              revenue: "Общий доход",
              profit: "Общая прибыль",
              trades: "Количество сделок",
              sales: "Количество продаж",
              purchases: "Количество покупок",
            },
          },
        },
        cards: {
          total: {
            title: "Общая прибыль",
            footer:
              "Продажи: <blue>{{sales}}</blue> | Покупки: <blue>{{purchases}}</blue> | <trade/> <blue>{{quantity}}</blue> | Маржа прибыли: <blue>{{profit_margin}}</blue>%",
            bar_chart: {
              title: "Общая прибыль",
              datasets: {
                this_year: "Этот год",
                last_year: "Прошлый год",
              },
              footers: {
                profit: "<expenseIco/> <blue>{{expense}}</blue> | <revenueIco/> <blue>{{revenue}}</blue> | <profitIco/> <blue>{{profit}}</blue>",
                trades: "<purchaseIco/> <blue>{{purchases}}</blue> | <saleIco/> <blue>{{sales}}</blue> | <tradeIco/> <blue>{{trades}}</blue>",
              },
            },
          },
          today: {
            title: "Прибыль за сегодня",
            footer:
              "Продажи: <blue>{{sales}}</blue> | Покупки: <blue>{{purchases}}</blue> | <trade/> <blue>{{quantity}}</blue> | Маржа прибыли: <blue>{{profit_margin}}</blue>%",
            bar_chart: {
              title: "Прибыль за сегодня",
              datasets: {
                profit: "Прибыль",
              },
              footers: {
                profit: "<expenseIco/> <blue>{{expense}}</blue> | <revenueIco/> <blue>{{revenue}}</blue> | <profitIco/> <blue>{{profit}}</blue>",
                trades: "<purchaseIco/> <blue>{{purchases}}</blue> | <saleIco/> <blue>{{sales}}</blue> | <tradeIco/> <blue>{{trades}}</blue>",
              },
            },
          },
          recent_days: {
            bar_chart: {
              title: "Последние {{days}} дней",
              datasets: {
                profit: "Прибыль",
              },
              footers: {
                profit: "<expenseIco/> <blue>{{expense}}</blue> | <revenueIco/> <blue>{{revenue}}</blue> | <profitIco/> <blue>{{profit}}</blue>",
                trades: "<purchaseIco/> <blue>{{purchases}}</blue> | <saleIco/> <blue>{{sales}}</blue> | <tradeIco/> <blue>{{trades}}</blue>",
              },
            },
          },
          best_seller: {
            title: "Прибыль от бестселлера",
            footer:
              "Название: <blue>{{name}}</blue> | П: <blue>{{sales}}</blue> | П: <blue>{{purchases}}</blue> | <trade/> <blue>{{quantity}}</blue> | МП: <blue>{{profit_margin}}</blue>%",
            by_category: {
              datatable: {
                columns: {
                  name: "Название",
                  revenue: "Доход",
                  expense: "Расход",
                  profit: "Прибыль",
                  profit_margin: "Маржа прибыли",
                },
              },
            },
          },
          last_transaction: {
            title: "Последняя транзакция",
            info_box: {
              purchase: "Покупка {{count}}",
              sale: "Продажа {{count}}",
            },
          },
        },
      },
      about: {
        cards: {
          coffee: {
            title: "Купить мне кофе",
          },
          discord: {
            title: "Discord",
          },
          faq: {
            title: "FAQ",
          },
          guide: {
            title: "Вики/Руководство",
          },
        },
        text: {
          version: "Версия: <blue>{{version}}</blue>",
          disclaimer: "Quantframe является сторонним приложением и не связано с Digital Extremes.",
        },
      },
      liveTrading: {
        pagination: "{{start}} - {{end}} / {{totalRecords}}",
        segments: {
          bought: "Куплено",
          listed: "Выставлено",
          profit: "Прибыль",
          total_plat: "Всего платины",
          trades: "Всего сделок",
        },
        datatable: {
          columns: {
            name: {
              title: "Название",
              value: "{{name}} <blue>{{sub_type}}</blue>",
            },
            bought: "Куплено за",
            minimum_price: {
              title: "Минимальная цена",
              btn: {
                edit: {
                  tooltip: "Установить минимальную цену",
                },
              },
            },
            list_price: "Цена в листинге",
            actions: {
              title: "Действия",
              buttons: {
                sell_manual: {
                  tooltip: "Продать вручную",
                },
                sell_auto: {
                  tooltip: "Продать по цене листинга",
                },
                hide: {
                  enabled_tooltip: "Скрыть",
                  disabled_tooltip: "Показать",
                },
                info: {
                  tooltip: "Показать информацию",
                },
                delete: {
                  tooltip: "Удалить",
                },
              },
            },
          },
        },
        prompts: {
          minimum_price: {
            title: "Минимальная цена",
            fields: {
              minimum_price: {
                label: "Минимальная цена",
                description: "Установите 0 для автоцены",
              },
            },
          },
          maximum_price: {
            title: "Максимальная цена",
            fields: {
              maximum_price: {
                label: "Максимальная цена",
                description: "Установите 0 для автоцены",
              },
            },
          },
          sell: {
            title: "Цена продажи",
            fields: {
              sell: {
                label: "Цена",
              },
            },
          },
          bought: {
            title: "Цена покупки",
            fields: {
              bought: {
                label: "Цена",
              },
            },
          },
          delete: {
            title: "Удалить предмет(ы)",
            message: "Вы уверены, что хотите удалить {{count}} предмет(ов)? Это действие необратимо.",
            confirm: "Да, удалить",
            cancel: "Нет, отмена",
          },
        },
        notifications: {
          copied: {
            title: "Скопировано",
          },
        },
        tabs: {
          item: {
            title: "Предметы на складе",
            datatable: {
              columns: {
                item_name: "Название",
                quantity: "Количество",
                owned: "В наличии",
              },
            },
            prompts: {
              update_bulk: {
                title: "Массовое обновление",
              },
            },
            buttons: {
              update_bulk: {
                tooltip: "Массовое обновление",
              },
              delete_bulk: {
                tooltip: "Массовое удаление",
              },
              wts: {
                tooltip: "Создать сообщение о продаже",
              },
            },
            errors: {
              create_stock: {
                title: "Ошибка создания склада",
                message: "Произошла ошибка при попытке создать склад.",
              },
              update_stock: {
                title: "Ошибка обновления склада",
                message: "Произошла ошибка при попытке обновить склад.",
              },
              update_bulk_stock: {
                title: "Ошибка массового обновления склада",
                message: "Произошла ошибка при попытке массового обновления склада.",
              },
              sell_stock: {
                title: "Ошибка продажи со склада",
                message: "Произошла ошибка при попытке продать со склада.",
              },
              delete_stock: {
                title: "Ошибка удаления со склада",
                message: "Произошла ошибка при попытке удалить со склада.",
              },
              delete_bulk_stock: {
                title: "Ошибка массового удаления со склада",
                message: "Произошла ошибка при попытке массового удаления со склада.",
              },
            },
            success: {
              create_stock: {
                title: "Успешное создание склада",
                message: "Предмет {{name}} успешно создан на складе.",
              },
              update_stock: {
                title: "Успешное обновление склада",
                message: "Предмет {{name}} успешно обновлен на складе.",
              },
              update_bulk_stock: {
                title: "Успешное массовое обновление склада",
                message: "Моды разлома на складе успешно обновлены.",
              },
              sell_stock: {
                title: "Успешная продажа со склада",
                message: "Предмет {{name}} успешно продан со склада.",
              },
              delete_stock: {
                title: "Успешное удаление со склада",
                message: "Предмет успешно удален со склада.",
              },
              delete_bulk_stock: {
                title: "Успешное массовое удаление со склада",
                message: "Моды разлома на складе успешно удалены.",
              },
            },
          },
          riven: {
            title: "Моды разлома на складе",
            datatable: {
              columns: {
                mastery_rank: "РМ",
                attributes: "Атрибуты",
                re_rolls: "Перероллы",
                actions: {
                  buttons: {
                    filter: {
                      tooltip: "Редактировать фильтр",
                    },
                  },
                },
              },
            },
            prompts: {
              update_bulk: {
                title: "Массовое обновление",
              },
              update_filter: {
                title: "Обновить фильтр",
              },
              create_riven: {
                title: "Создать мод разлома",
              },
            },
            buttons: {
              update_bulk: {
                tooltip: "Массовое обновление",
              },
              delete_bulk: {
                tooltip: "Массовое удаление",
              },
              wts: {
                tooltip: "Создать сообщение о продаже",
              },
              selection: {
                tooltip: "Создать сообщение о выборе",
              },
              create_riven: {
                tooltip: "Создать мод разлома",
              },
            },
            errors: {
              create_riven: {
                title: "Ошибка создания мода разлома",
                message: "Произошла ошибка при попытке создать мод разлома.",
              },
              update_stock: {
                title: "Ошибка обновления склада",
                message: "Произошла ошибка при попытке обновить склад.",
              },
              update_bulk_stock: {
                title: "Ошибка массового обновления склада",
                message: "Произошла ошибка при попытке массового обновления склада.",
              },
              delete_bulk_stock: {
                title: "Ошибка массового удаления со склада",
                message: "Произошла ошибка при попытке массового удаления со склада.",
              },
              sell_stock: {
                title: "Ошибка продажи со склада",
                message: "Произошла ошибка при попытке продать со склада.",
              },
              delete_stock: {
                title: "Ошибка удаления со склада",
                message: "Произошла ошибка при попытке удалить со склада.",
              },
            },
            success: {
              create_riven: {
                title: "Успешное создание мода разлома",
                message: "Мод разлома {{name}} успешно создан.",
              },
              update_stock: {
                title: "Успешное обновление склада",
                message: "Мод разлома {{name}} успешно обновлен на складе.",
              },
              update_bulk_stock: {
                title: "Успешное массовое обновление склада",
                message: "Моды разлома на складе успешно обновлены.",
              },
              sell_stock: {
                title: "Успешная продажа со склада",
                message: "Мод разлома {{name}} успешно продан со склада.",
              },
              delete_stock: {
                title: "Успешное удаление со склада",
                message: "Мод разлома успешно удален со склада.",
              },
              delete_bulk_stock: {
                title: "Успешное массовое удаление со склада",
                message: "Моды разлома на складе успешно удалены.",
              },
            },
          },
          wish_list: {
            title: "Список желаемого",
            datatable: {
              columns: {
                quantity: "Количество",
                maximum_price: {
                  title: "Максимальная цена",
                  btn: {
                    edit: {
                      tooltip: "Установить максимальную цену",
                    },
                  },
                },
                actions: {
                  buttons: {
                    bought_manual: {
                      tooltip: "Куплено вручную",
                    },
                    bought_auto: {
                      tooltip: "Куплено по цене листинга",
                    },
                  },
                },
              },
            },
            errors: {
              create_item: {
                title: "Ошибка создания предмета",
                message: "Произошла ошибка при попытке создать предмет.",
              },
              update_item: {
                title: "Ошибка обновления предмета",
                message: "Произошла ошибка при попытке обновить предмет.",
              },
              delete_item: {
                title: "Ошибка удаления предмета",
                message: "Произошла ошибка при попытке удалить предмет.",
              },
            },
            success: {
              create_item: {
                title: "Успешное создание предмета",
                message: "Предмет {{name}} успешно создан.",
              },
              update_item: {
                title: "Успешное обновление предмета",
                message: "Предмет {{name}} успешно обновлен.",
              },
              delete_item: {
                title: "Успешное удаление предмета",
                message: "Предмет успешно удален.",
              },
            },
          },
        },
      },
      debug: {
        tabs: {
          transaction: {
            title: "Транзакции",
            prompts: {
              delete: {
                title: "Удалить транзакцию",
                message: "Вы уверены, что хотите удалить транзакцию {{name}}? Это действие необратимо.",
                confirm: "Да, удалить",
                cancel: "Нет, отмена",
              },
              update: {
                title: "Обновить транзакцию",
              },
            },
            datatable: {
              columns: {
                id: {
                  title: "ID",
                },
                name: {
                  title: "Название",
                  value: "{{name}} {{mod_name}} <blue>{{sub_type}}</blue>",
                },
                item_type: {
                  title: "Тип предмета",
                },
                quantity: {
                  title: "Количество",
                },
                price: {
                  title: "Цена",
                },
                created_at: {
                  title: "Создано",
                },
                actions: {
                  title: "Действия",
                  buttons: {
                    update: {
                      tooltip: "Обновить",
                    },
                    delete: {
                      tooltip: "Удалить",
                    },
                  },
                },
              },
            },
            success: {
              update_transaction: {
                title: "Успешное обновление транзакции",
                message: "Транзакция {{name}} успешно обновлена.",
              },
              delete_transaction: {
                title: "Успешное удаление транзакции",
                message: "Транзакция успешно удалена.",
              },
            },
            errors: {
              update_transaction: {
                title: "Ошибка обновления транзакции",
                message: "Произошла ошибка при попытке обновить транзакцию.",
              },
              delete_transaction: {
                title: "Ошибка удаления транзакции",
                message: "Произошла ошибка при попытке удалить транзакцию.",
              },
            },
          },
          database: {
            title: "База данных",
            cards: {
              reset: {
                title: "Сбросить таблицу базы данных",
                buttons: {
                  rest: {
                    title: "Сброс",
                  },
                },
                errors: {
                  rest: {
                    title: "Ошибка сброса",
                    message: "Произошла ошибка при попытке сброса.",
                  },
                },
                success: {
                  rest: {
                    title: "Успешный сброс",
                    message: "Сброс успешно завершен.",
                  },
                },
              },
              migrate: {
                title: "Миграция с 1.0.4",
                buttons: {
                  migrate: {
                    title: "Мигрировать",
                  },
                },
                errors: {
                  migrate: {
                    title: "Ошибка миграции",
                    message: "Произошла ошибка при попытке миграции.",
                  },
                },
                success: {
                  migrate: {
                    title: "Успешная миграция",
                    message: "Миграция успешно завершена.",
                  },
                },
              },
              import_algo_trader: {
                title: "Импорт Algo Trader",
                fields: {
                  db_path: {
                    label: "Файл",
                    placeholder: "Выберите файл...",
                  },
                },
                buttons: {
                  import: {
                    title: "Импорт",
                  },
                  open_file: {
                    tooltip: "Открыть файл",
                  },
                },
                errors: {
                  import: {
                    title: "Ошибка импорта",
                    message: "Произошла ошибка при попытке импорта.",
                  },
                },
                success: {
                  import: {
                    title: "Успешный импорт",
                    message: "Импорт успешно завершен.",
                  },
                },
              },
            },
          },
        },
      },
      auth: {
        progress: {
          logging_in: "Вход в систему",
          refreshing_orders: "Обновление ордеров",
          refreshing_auctions: "Обновление аукционов",
          refreshing_chat: "Обновление чата",
          refreshing_cache: "Обновление кеша",
          refreshing_transaction: "Обновление транзакций",
          refreshing_stock_items: "Обновление предметов на складе",
          refreshing_stock_riven: "Обновление модов разлома на складе",
        },
        errors: {
          login: {
            title: "Ошибка входа",
            email_not_exist: "Email не существует",
            password_invalid: "Неверный пароль",
            message: "Произошла ошибка при попытке входа.",
            banned: "Вы забанены",
            ban_reason: "<red>Причина: {{reason}}</red>",
          },
        },
        success: {
          login: {
            title: "Успешный вход",
            message: "С возвращением! {{name}}",
          },
        },
      },
      error: {
        title: "Ошибка в компоненте {{component}}",
        backtrace: "Местоположение: {{backtrace}}",
        cause: "Причина: {{cause}}",
        footer: "Если вы считаете, что это ошибка, пожалуйста, сообщите об этом разработчику. Спасибо.",
      },
      banned: {
        wfm: {
          title: "Аккаунт Warframe Market заблокирован по причине:",
          reason: "Причина: {{reason}}",
          until: "До:",
        },
        qf: {
          title: "Аккаунт Quantframe заблокирован по причине:",
          reason: "Причина: {{reason}}",
          until: "До:",
        },
      },
      warframe_market: {
        tabs: {
          orders: {
            title: "Ордера",
            buttons: {
              sell_manual: {
                buy: {
                  tooltip: "Куплено вручную",
                },
                sell: {
                  tooltip: "Продано вручную",
                },
              },
              sell_auto: {
                buy: {
                  tooltip: "Куплено по цене листинга",
                },
                sell: {
                  tooltip: "Продано по цене листинга",
                },
              },
              delete: {
                tooltip: "Удалить",
              },
              refresh: {
                tooltip: "Обновить",
              },
              delete_all: {
                tooltip: "Удалить все",
              },
              info: {
                tooltip: "Показать информацию",
              },
            },
            prompts: {
              delete: {
                title: "Удалить ордер",
                message: "Вы уверены, что хотите удалить ордер {{name}}? Это действие необратимо.",
                confirm: "Да, удалить",
                cancel: "Нет, отмена",
              },
              delete_all: {
                title: "Удалить все ордера",
                message: "Вы уверены, что хотите удалить все ордера? Это действие необратимо.",
                confirm: "Да, удалить",
                cancel: "Нет, отмена",
              },
              sell: {
                title: "Продажа вручную",
                field: {
                  label: "Продано за",
                },
              },
              buy: {
                title: "Покупка вручную",
                field: {
                  label: "Куплено за",
                },
              },
            },
            success: {
              create_stock: {
                title: "Успешное создание склада",
                message: "Предмет {{name}} успешно создан на складе.",
              },
              sell_stock: {
                title: "Успешная продажа со склада",
                message: "Предмет {{name}} успешно продан со склада.",
              },
              refresh: {
                title: "Успешное обновление",
                message: "Всего {{count}} ордеров успешно обновлено.",
              },
              delete: {
                title: "Успешное удаление",
                message: "Ордер успешно удален.",
              },
              delete_all: {
                title: "Успешное удаление всего",
                message: "Все ордера успешно удалены.",
              },
            },
            errors: {
              create_stock: {
                title: "Ошибка создания склада",
                message: "Произошла ошибка при попытке создать склад.",
              },
              sell_stock: {
                title: "Ошибка продажи со склада",
                message: "Произошла ошибка при попытке продать со склада.",
              },
              refresh: {
                title: "Ошибка обновления",
                message: "Произошла ошибка при попытке обновить ордера.",
              },
              delete: {
                title: "Ошибка удаления",
                message: "Произошла ошибка при попытке удалить ордер.",
              },
              delete_all: {
                title: "Ошибка удаления всего",
                message: "Произошла ошибка при попытке удалить все ордера.",
              },
            },
          },
          auctions: {
            title: "Аукционы",
            buttons: {
              refresh: {
                tooltip: "Обновить",
              },
              delete_all: {
                tooltip: "Удалить все",
              },
              delete: {
                tooltip: "Удалить",
              },
              import: {
                tooltip: "Импортировать аукцион на склад",
              },
            },
            prompts: {
              import_riven: {
                title: "Импортировать мод разлома на склад",
                bought: {
                  label: "Куплено за",
                },
              },
              delete: {
                title: "Удалить аукцион",
                message: "Вы уверены, что хотите удалить аукцион? Это действие необратимо.",
                confirm: "Да, удалить",
                cancel: "Нет, отмена",
              },
              delete_all: {
                title: "Удалить все аукционы",
                message: "Вы уверены, что хотите удалить все аукционы? Это действие необратимо.",
                confirm: "Да, удалить",
                cancel: "Нет, отмена",
              },
            },
            success: {
              import_riven: {
                title: "Успешный импорт",
                message: "Мод разлома успешно импортирован на склад.",
              },
              refresh: {
                title: "Успешное обновление",
                message: "Всего {{count}} аукционов успешно обновлено.",
              },
              delete: {
                title: "Успешное удаление",
                message: "Аукцион успешно удален.",
              },
              delete_all: {
                title: "Успешное удаление всего",
                message: "Все ордера успешно удалены.",
              },
            },
            errors: {
              refresh: {
                title: "Ошибка обновления",
                message: "Произошла ошибка при попытке обновить аукционы.",
              },
              import_riven: {
                title: "Ошибка импорта",
                message: "Произошла ошибка при попытке импортировать мод разлома.",
              },
              delete: {
                title: "Ошибка удаления",
                message: "Произошла ошибка при попытке удалить аукцион.",
              },
              delete_all: {
                title: "Успешное удаление всего",
                message: "Произошла ошибка при попытке удалить все аукционы.",
              },
            },
          },
        },
      },
      chats: {
        buttons: {
          delete: {
            tooltip: "Удалить",
          },
          refresh: {
            tooltip: "Обновить",
          },
          delete_all: {
            tooltip: "Удалить все",
          },
        },
        prompts: {
          delete_all: {
            title: "Удалить все чаты",
            message: "Вы уверены, что хотите удалить все чаты? Это действие необратимо.",
            confirm: "Да, удалить",
            cancel: "Нет, отмена",
          },
          delete: {
            title: "Удалить чат",
            message: "Вы уверены, что хотите удалить чат с {{name}}? Это действие необратимо.",
            confirm: "Да, удалить",
            cancel: "Нет, отмена",
          },
        },
        success: {
          refresh: {
            title: "Успешное обновление",
            message: "Всего {{count}} чатов успешно обновлено.",
          },
          delete: {
            title: "Успешное удаление",
            message: "Чат успешно удален.",
          },
          delete_all: {
            title: "Успешное удаление всего",
            message: "Все чаты успешно удалены.",
          },
        },
        errors: {
          refresh: {
            title: "Ошибка обновления",
            message: "Произошла ошибка при попытке обновить чаты.",
          },
          delete: {
            title: "Ошибка удаления",
            message: "Произошла ошибка при попытке удалить чат.",
          },
          delete_all: {
            title: "Ошибка удаления всего",
            message: "Произошла ошибка при попытке удалить все чаты.",
          },
        },
      },
    },
  };