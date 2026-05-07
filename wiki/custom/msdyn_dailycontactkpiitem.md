---
logical: "msdyn_dailycontactkpiitem"
display: "KPI giornalieri per il contatto"
entitySetName: "msdyn_dailycontactkpiitems"
primaryId: "msdyn_dailycontactkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# KPI giornalieri per il contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailycontactkpiitem` |
| Display name | KPI giornalieri per il contatto |
| Display (plural) | dailycontactkpiitems |
| Schema name | `msdyn_dailycontactkpiitem` |
| Entity set (Web API) | `msdyn_dailycontactkpiitems` |
| Primary id attribute | `msdyn_dailycontactkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailycontactkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailycontactkpiitems
PATCH /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_computationaccuracy`, `msdyn_contactid`, `msdyn_dailycontactkpiitemid`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailycontactkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailycontactkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailycontactkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailycontactkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dailycontactkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_contact_dailycontactkpiitem_entityid` | [contact](contact.md) | `msdyn_entityid` | `msdyn_entityid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailycontactkpiitem_SyncErrors` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_AsyncOperations` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_MailboxTrackingFolders` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_UserEntityInstanceDatas` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `objectid` | `objectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_ProcessSession` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_BulkDeleteFailures` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailycontactkpiitem` |
| `msdyn_dailycontactkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_dailycontactkpiitem](msdyn_dailycontactkpiitem.md) | `objectid` | `objectid_msdyn_dailycontactkpiitem` |


## Source

Generated from [msdyn_dailycontactkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dailycontactkpiitem')) on 2026-05-07.