---
logical: "msdyn_playbookcategory"
display: "[DEPRECATO] Categoria di playbook"
entitySetName: "msdyn_playbookcategories"
primaryId: "msdyn_playbookcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# [DEPRECATO] Categoria di playbook

Elenco di categorie per cui è possibile creare un playbook.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_playbookcategory` |
| Display name | [DEPRECATO] Categoria di playbook |
| Display (plural) | Categorie di playbook |
| Schema name | `msdyn_playbookcategory` |
| Entity set (Web API) | `msdyn_playbookcategories` |
| Primary id attribute | `msdyn_playbookcategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_playbookcategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_playbookcategories(<guid>)
POST /api/data/v9.2/msdyn_playbookcategories
PATCH /api/data/v9.2/msdyn_playbookcategories(<guid>)
DELETE /api/data/v9.2/msdyn_playbookcategories(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_name`, `msdyn_playbookcategoryid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_playbookcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_playbookcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_playbookcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_playbookcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_playbookcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_playbookcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_playbookcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_playbookcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_playbookcategory_SyncErrors` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_DuplicateMatchingRecord` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_DuplicateBaseRecord` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `baserecordid` | `baserecordid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_AsyncOperations` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_MailboxTrackingFolders` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_UserEntityInstanceDatas` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `objectid` | `objectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_ProcessSession` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_BulkDeleteFailures` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookcategory` |
| `msdyn_playbookcategory_PrincipalObjectAttributeAccesses` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `objectid` | `objectid_msdyn_playbookcategory` |
| `category_playbooktemplate` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `msdyn_categoryid` | `msdyn_categoryid` |
| `msdyn_playbookcategory_msdyn_playbookinstance` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `msdyn_categoryid` | `msdyn_categoryid` |


## Source

Generated from [msdyn_playbookcategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_playbookcategory')) on 2026-05-07.