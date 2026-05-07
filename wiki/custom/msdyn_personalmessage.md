---
logical: "msdyn_personalmessage"
display: "Risposta rapida personale"
entitySetName: "msdyn_personalmessages"
primaryId: "msdyn_personalmessageid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta rapida personale

Risposte rapide personali degli agenti di Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personalmessage` |
| Display name | Risposta rapida personale |
| Display (plural) | Risposte rapide personali |
| Schema name | `msdyn_personalmessage` |
| Entity set (Web API) | `msdyn_personalmessages` |
| Primary id attribute | `msdyn_personalmessageid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personalmessages?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_personalmessages(<guid>)
POST /api/data/v9.2/msdyn_personalmessages
PATCH /api/data/v9.2/msdyn_personalmessages(<guid>)
DELETE /api/data/v9.2/msdyn_personalmessages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_locale_field`, `msdyn_message`, `msdyn_personalmessageid`, `msdyn_tagscontrolfield`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_personalmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personalmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personalmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personalmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_personalmessage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_personalmessage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_personalmessage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_personalmessage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personalmessage_SyncErrors` | [msdyn_personalmessage](msdyn_personalmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalmessage` |
| `msdyn_personalmessage_DuplicateMatchingRecord` | [msdyn_personalmessage](msdyn_personalmessage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_personalmessage` |
| `msdyn_personalmessage_DuplicateBaseRecord` | [msdyn_personalmessage](msdyn_personalmessage.md) | `baserecordid` | `baserecordid_msdyn_personalmessage` |
| `msdyn_personalmessage_AsyncOperations` | [msdyn_personalmessage](msdyn_personalmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalmessage` |
| `msdyn_personalmessage_MailboxTrackingFolders` | [msdyn_personalmessage](msdyn_personalmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalmessage` |
| `msdyn_personalmessage_UserEntityInstanceDatas` | [msdyn_personalmessage](msdyn_personalmessage.md) | `objectid` | `objectid_msdyn_personalmessage` |
| `msdyn_personalmessage_ProcessSession` | [msdyn_personalmessage](msdyn_personalmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalmessage` |
| `msdyn_personalmessage_BulkDeleteFailures` | [msdyn_personalmessage](msdyn_personalmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalmessage` |
| `msdyn_personalmessage_PrincipalObjectAttributeAccesses` | [msdyn_personalmessage](msdyn_personalmessage.md) | `objectid` | `objectid_msdyn_personalmessage` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_personalmessage_msdyn_octag` | [msdyn_octag](msdyn_octag.md) | _n/a_ | `msdyn_msdyn_personalmessage_msdyn_octag` |

## Source

Generated from [msdyn_personalmessage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_personalmessage')) on 2026-05-07.