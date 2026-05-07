---
logical: "equipment"
display: "Facility/Equipment"
entitySetName: "equipments"
primaryId: "equipmentid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Facility/Equipment

Resource that can be scheduled.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `equipment` |
| Display name | Facility/Equipment |
| Display (plural) | Facilities/Equipment |
| Schema name | `Equipment` |
| Entity set (Web API) | `equipments` |
| Primary id attribute | `equipmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/equipments?$select=name&$top=10
GET /api/data/v9.2/equipments(<guid>)
POST /api/data/v9.2/equipments
PATCH /api/data/v9.2/equipments(<guid>)
DELETE /api/data/v9.2/equipments(<guid>)
```

## Attributes

Writable: **16** · Read-only: **9**

### Writable

`BusinessUnitId`, `CalendarId`, `Description`, `DisplayInServiceViews`, `EMailAddress`, `EquipmentId`, `ImportSequenceNumber`, `IsDisabled`, `Name`, `OverriddenCreatedOn`, `SiteId`, `Skills`, `TimeZoneCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_equipment` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid_businessunit` |
| `calendar_equipment` | [calendar](calendar.md) | `calendarid` | `calendarid` |
| `equipment_systemuser` | [systemuser](systemuser.md) | `businessunitid` | `businessunitid_systemuser` |
| `lk_equipment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_equipment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_equipment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_equipment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_equipment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `site_equipment` | [site](site.md) | `siteid` | `siteid` |
| `TransactionCurrency_Equipment` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `equipment_accounts` | _n/a_ | `preferredequipmentid` | _n/a_ |
| `equipment_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Equipment_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Equipment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Equipment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `equipment_connections1` | _n/a_ | `record1id` | _n/a_ |
| `equipment_connections2` | _n/a_ | `record2id` | _n/a_ |
| `equipment_contacts` | _n/a_ | `preferredequipmentid` | _n/a_ |
| `Equipment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Equipment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Equipment_Email_EmailSender` | _n/a_ | `emailsender` | _n/a_ |
| `equipment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `equipment_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Equipment_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `equipment_resources` | _n/a_ | `resourceid` | _n/a_ |
| `Equipment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [equipment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/equipment.md) on 2026-05-06.