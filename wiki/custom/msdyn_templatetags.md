---
logical: "msdyn_templatetags"
display: "Tag modello (deprecato)"
entitySetName: "msdyn_templatetagses"
primaryId: "msdyn_templatetagsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tag modello (deprecato)

Tag associati ai modelli. I modelli vengono individuati tramite tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatetags` |
| Display name | Tag modello (deprecato) |
| Display (plural) | TemplateTags (deprecato) |
| Schema name | `msdyn_templatetags` |
| Entity set (Web API) | `msdyn_templatetagses` |
| Primary id attribute | `msdyn_templatetagsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatetagses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templatetagses(<guid>)
POST /api/data/v9.2/msdyn_templatetagses
PATCH /api/data/v9.2/msdyn_templatetagses(<guid>)
DELETE /api/data/v9.2/msdyn_templatetagses(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_templatetagsid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templatetags_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templatetags_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templatetags_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templatetags_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templatetags` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templatetags` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templatetags` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templatetags` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatetags_SyncErrors` | [msdyn_templatetags](msdyn_templatetags.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatetags` |
| `msdyn_templatetags_DuplicateMatchingRecord` | [msdyn_templatetags](msdyn_templatetags.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_templatetags` |
| `msdyn_templatetags_DuplicateBaseRecord` | [msdyn_templatetags](msdyn_templatetags.md) | `baserecordid` | `baserecordid_msdyn_templatetags` |
| `msdyn_templatetags_AsyncOperations` | [msdyn_templatetags](msdyn_templatetags.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatetags` |
| `msdyn_templatetags_MailboxTrackingFolders` | [msdyn_templatetags](msdyn_templatetags.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatetags` |
| `msdyn_templatetags_UserEntityInstanceDatas` | [msdyn_templatetags](msdyn_templatetags.md) | `objectid` | `objectid_msdyn_templatetags` |
| `msdyn_templatetags_ProcessSession` | [msdyn_templatetags](msdyn_templatetags.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatetags` |
| `msdyn_templatetags_BulkDeleteFailures` | [msdyn_templatetags](msdyn_templatetags.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatetags` |
| `msdyn_templatetags_PrincipalObjectAttributeAccesses` | [msdyn_templatetags](msdyn_templatetags.md) | `objectid` | `objectid_msdyn_templatetags` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationnotificationtag` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtag` |
| `msdyn_msdyn_consoleapplicationtemplate_tags` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_tags` |
| `msdyn_msdyn_consoleapplicationsessiontemp_tag` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemp_tag` |

## Source

Generated from [msdyn_templatetags (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templatetags')) on 2026-05-07.