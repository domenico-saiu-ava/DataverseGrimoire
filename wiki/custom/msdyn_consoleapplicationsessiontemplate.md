---
logical: "msdyn_consoleapplicationsessiontemplate"
display: "Modelli di sessione (deprecato)"
entitySetName: "msdyn_consoleapplicationsessiontemplates"
primaryId: "msdyn_consoleapplicationsessiontemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modelli di sessione (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationsessiontemplate` |
| Display name | Modelli di sessione (deprecato) |
| Display (plural) | Modelli di sessione (deprecato) |
| Schema name | `msdyn_consoleapplicationsessiontemplate` |
| Entity set (Web API) | `msdyn_consoleapplicationsessiontemplates` |
| Primary id attribute | `msdyn_consoleapplicationsessiontemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationsessiontemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationsessiontemplates(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationsessiontemplates
PATCH /api/data/v9.2/msdyn_consoleapplicationsessiontemplates(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationsessiontemplates(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_anchortab`, `msdyn_consoleapplicationsessiontemplateid`, `msdyn_description`, `msdyn_icon`, `msdyn_ispanelhidden`, `msdyn_name`, `msdyn_panelstate`, `msdyn_pinned`, `msdyn_renderingorder`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationsessiontemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationsessiontemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationsessiontemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationsessiontemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consoleapplicationsessiontemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consoleapplicationsessiontemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consoleapplicationsessiontemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consoleapplicationsessiontemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `msdyn_anchortab` | `msdyn_AnchorTab` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationsessiontemplate_SyncErrors` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_DuplicateMatchingRecord` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_DuplicateBaseRecord` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_AsyncOperations` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_MailboxTrackingFolders` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_UserEntityInstanceDatas` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_ProcessSession` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_BulkDeleteFailures` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationsessiontemplate` |
| `msdyn_consoleapplicationsessiontemplate_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationsessiontemplate` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationsessiontemplate_m` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemplate_m` |
| `msdyn_msdyn_consoleapplicationsessiontemp_tag` | [msdyn_templatetags](msdyn_templatetags.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemp_tag` |

## Source

Generated from [msdyn_consoleapplicationsessiontemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationsessiontemplate')) on 2026-05-07.