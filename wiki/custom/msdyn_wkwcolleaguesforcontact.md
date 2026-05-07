---
logical: "msdyn_wkwcolleaguesforcontact"
display: "wkwcolleaguesforcontact"
entitySetName: "msdyn_wkwcolleaguesforcontacts"
primaryId: "msdyn_wkwcolleaguesforcontactid"
primaryName: "msdyn_introducer_emailaddress"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# wkwcolleaguesforcontact

Entity for storing contact introducer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wkwcolleaguesforcontact` |
| Display name | wkwcolleaguesforcontact |
| Display (plural) | wkwcolleaguesforcontacts |
| Schema name | `msdyn_wkwcolleaguesforcontact` |
| Entity set (Web API) | `msdyn_wkwcolleaguesforcontacts` |
| Primary id attribute | `msdyn_wkwcolleaguesforcontactid` |
| Primary name attribute | `msdyn_introducer_emailaddress` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wkwcolleaguesforcontacts?$select=msdyn_introducer_emailaddress&$top=10
GET /api/data/v9.2/msdyn_wkwcolleaguesforcontacts(<guid>)
POST /api/data/v9.2/msdyn_wkwcolleaguesforcontacts
PATCH /api/data/v9.2/msdyn_wkwcolleaguesforcontacts(<guid>)
DELETE /api/data/v9.2/msdyn_wkwcolleaguesforcontacts(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_computationaccuracy`, `msdyn_introduced_entity_id`, `msdyn_introducer_emailaddress`, `msdyn_introducer_systemuserid`, `msdyn_last_interaction_dataflow`, `msdyn_last_interaction_datetime`, `msdyn_last_interaction_type`, `msdyn_score`, `msdyn_wkwcolleaguesforcontactid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wkwcolleaguesforcontact_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wkwcolleaguesforcontact_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wkwcolleaguesforcontact_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wkwcolleaguesforcontact_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_wkwcolleaguesforcontact` | [organization](organization.md) | `organizationid` | `organizationid` |
| `systemuser_msdyn_wkwcolleaguesforcontact_introducer_systemuserid` | [systemuser](systemuser.md) | `msdyn_introducer_systemuserid` | `msdyn_introducer_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wkwcolleaguesforcontact_SyncErrors` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_DuplicateMatchingRecord` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_DuplicateBaseRecord` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `baserecordid` | `baserecordid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_AsyncOperations` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_MailboxTrackingFolders` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_UserEntityInstanceDatas` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `objectid` | `objectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_ProcessSession` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_BulkDeleteFailures` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcontact` |
| `msdyn_wkwcolleaguesforcontact_PrincipalObjectAttributeAccesses` | [msdyn_wkwcolleaguesforcontact](msdyn_wkwcolleaguesforcontact.md) | `objectid` | `objectid_msdyn_wkwcolleaguesforcontact` |


## Source

Generated from [msdyn_wkwcolleaguesforcontact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wkwcolleaguesforcontact')) on 2026-05-07.