---
logical: "msdyn_attributevalue"
display: "Valore attributo venditore"
entitySetName: "msdyn_attributevalues"
primaryId: "msdyn_attributevalueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valore attributo venditore

Valore attributo del venditore o del team di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attributevalue` |
| Display name | Valore attributo venditore |
| Display (plural) | Valori attributo venditore |
| Schema name | `msdyn_attributevalue` |
| Entity set (Web API) | `msdyn_attributevalues` |
| Primary id attribute | `msdyn_attributevalueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_attributevalues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_attributevalues(<guid>)
POST /api/data/v9.2/msdyn_attributevalues
PATCH /api/data/v9.2/msdyn_attributevalues(<guid>)
DELETE /api/data/v9.2/msdyn_attributevalues(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributevalueid`, `msdyn_linkedvalue`, `msdyn_name`, `msdyn_parentattribute`, `msdyn_reviewstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_attributevalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attributevalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attributevalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attributevalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_attributevalue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_attributevalue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_attributevalue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_attributevalue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_attributeparent` | [msdyn_attribute](msdyn_attribute.md) | `msdyn_parentattribute` | `msdyn_parentattribute` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attributevalue_SyncErrors` | [msdyn_attributevalue](msdyn_attributevalue.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributevalue` |
| `msdyn_attributevalue_DuplicateMatchingRecord` | [msdyn_attributevalue](msdyn_attributevalue.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_attributevalue` |
| `msdyn_attributevalue_DuplicateBaseRecord` | [msdyn_attributevalue](msdyn_attributevalue.md) | `baserecordid` | `baserecordid_msdyn_attributevalue` |
| `msdyn_attributevalue_AsyncOperations` | [msdyn_attributevalue](msdyn_attributevalue.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributevalue` |
| `msdyn_attributevalue_MailboxTrackingFolders` | [msdyn_attributevalue](msdyn_attributevalue.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributevalue` |
| `msdyn_attributevalue_UserEntityInstanceDatas` | [msdyn_attributevalue](msdyn_attributevalue.md) | `objectid` | `objectid_msdyn_attributevalue` |
| `msdyn_attributevalue_ProcessSession` | [msdyn_attributevalue](msdyn_attributevalue.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributevalue` |
| `msdyn_attributevalue_BulkDeleteFailures` | [msdyn_attributevalue](msdyn_attributevalue.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributevalue` |
| `msdyn_attributevalue_PrincipalObjectAttributeAccesses` | [msdyn_attributevalue](msdyn_attributevalue.md) | `objectid` | `objectid_msdyn_attributevalue` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_attributevalue_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_msdyn_attributevalue_systemuser` |

## Source

Generated from [msdyn_attributevalue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_attributevalue')) on 2026-05-07.