/* Copyright (c) 2018-2021 Marco Stahl */

interface StringMap {
  readonly [key: string]: string;
}

export const DEFAULT_TEMPLATE_ID = 'minimal';
const comments = require("./templates_comment");
export const TEMPLATES: StringMap = {
  [DEFAULT_TEMPLATE_ID]: `/* 
${comments.info}
 $copyrightHolder */`,
  apache: `
/*
 * Copyright $from$to $copyrightHolder
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`.trim(),
  gplv3: `
/*
 * Copyright (c) $from$to $copyrightHolder.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
`.trim()
};

export const TEMPLATE_IDS = Object.keys(TEMPLATES);
